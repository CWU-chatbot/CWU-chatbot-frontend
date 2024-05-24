import { useEffect } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SideBar from '/components/SideBar';

function MyApp({ Component, pageProps, token }) {
  const router = useRouter();

  useEffect(() => {
    const localToken = localStorage.getItem('accessToken');
    if (!localToken && router.pathname !== '/login_select') {
      router.push('/login_select');
    } else if (localToken && router.pathname === '/login_select') {
      router.push('/');
    }
  }, [router]);

  if (router.pathname === '/login_select') {
    return (
      <ChakraProvider>
        <Flex width="100%">
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Flex width="100%">
        <SideBar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const cookie = ctx.req ? ctx.req.headers.cookie : null;
  let token = null;

  if (cookie) {
    const match = cookie.match(/accessToken=([^;]+)/);
    if (match) {
      token = match[1];
    }
  }

  if (!token && ctx.pathname !== '/login_select') {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/login_select' });
      ctx.res.end();
    }
  }

  return { token };
};

export default MyApp;
