# NextJs practice

## Difference of between framework and library

- framework
  제공된 환경과 규칙에따라 작업 할 수 있음
- library
  내맘대로 자유도 높게 작업 할 수 있음

## Pages

- NextJs는 pages폴더안에 존재하는 파일명이 router가 된다.
- 이때 해당 파일에는 react component를 export default 해줘야 한다.

## Static Pre Rendering

- ReactJs는 기본적으로 CSR(Client Side Rendering)라서 모든 javascript를 client가 다 다운 받아야지만 잘 작동할 수 있다.
  (만약 느린 네트워크 환경에서 ReactJs로 만들어진 웹페이지를 불러온다면 Javascript가 다 다운받아지기 전까지 어떤것도 볼수 없다. => 나쁜 사용자 경험)
- NextJs는 CSR과 SSR을 섞어서 제공한다. 일부는 ssr로 처리하여 html rendering완료 후 client로 보내고, 그다음 javascript등 나머지를 CSR로 처리하여 javascript가 전부 웹브라우저에 다운받아졌다면 그때 미리 렌더링된 html것들과 javascript의 것들을 연결하여 정상 작동한다.

## Routing

- NextJs에서 제공하는 router 기능을 사용하여 제어한다.

```
import Link from 'next/link'
import { useRouter } from 'next/router'
```

## CSS Module

- CSS를 적용하는 방법중 하나
  이 패턴으로 css를 관리하면 className이 중복된다해도 각각의 className은 자동으로 고유한 값으로 랜덤하게 지정되기때문에 css classNaming의 고민을 할 필요가 없다

<!-- cssModule 적용패턴 #1 -->

```
<a
  className={`${styles.link} ${
    router.pathname === '/' ? styles.active : ''
  }`}
>
  Home
</a>
```

<!-- cssModule 적용패턴 #2 -->

```
<a
  className={[
    styles.link,
    router.pathname === '/about' ? styles.active : '',
  ].join(' ')}
>
  About
</a>
```

## styles JSX

## customApp

- global 하게 최상단에서 모든 컴포넌트에 적용하는 방법

```
pages/_app.tsx
```

- 위 경로에서 정해진 nextJs의 규칙대로 사용하면된다.
