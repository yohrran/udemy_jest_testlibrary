screen Query Method

- get : DOM에 있는 엘리먼트 요소를 선택
- query: DOM에 보이지 않는 엘리먼트 요소를 선택
- find : 비동기 요소를 선택

All

- (exclude) : 하나만 맞는 걸 매칭
- (include) : 하나 이상 맞는 걸 매칭

배열과 객체는 toEqual을 사용해서 테스트를 한다.

axios를 사용할 시 비동기식으로 작동하기 때문에 테스트에 있어서 async, await, find를 이용해 테스트를 작성한다.

waitFor : 타임아웃 제한까지 테스트 실행을 멈췄다가 다시 실행시키는 메소드

만약 useContext 사용해서 test를 하고 싶다면, wrapper을 이용해주면 된다.

```
render(<Options optionType="scoops" />, {wrapper: OrderDetailsProvider});
```

위와 같이 하나씩 wrapper해주는게 귀찮다면, Custom Render을 이용해준다.
래핑하는 렌더를 가지고 render을 덮는 형식이다. 라우터 등을 사용하고 있다면, 파일에 추가시켜서 필요한 모든 부분을 래핑할 수 있다.
