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

` { exact: false } 는 *byRole에서는 안되기 때문에 주의해야 한다.`

현재 테스트를 진행하면 아래와 같은 에러 메시지가 발생한다.

```Warning: An update to Options inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):
```

삭제하는 옵션으로는

1. 자동으로 cleanup하게 한다. 그렇게 하면 특정 테스트만 건너 뛰기 때문에, 추천되지 않는다.

2. useEffect가 실행되지 않고, axios를 호출하지 않는 것이지만, 실제 사용자가 수행하는 작업과 테스트 간 연결성이 떨어지게 된다.

3. 테스트 하려는 코드를 상태 변경을 대기하고 있는 테스트 시작부분이 넣는 것이다. 처음 시작하는 문구를 모든 플로우에 넣지 않아도 된다.

4. await를 넣는 것이다. 가장 오류를 적게 발생하게 한다.
