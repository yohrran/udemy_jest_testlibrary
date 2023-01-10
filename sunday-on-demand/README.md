screen Query Methods

- get : DOM에 있는 엘리먼트 요소를 선택
- query: DOM에 보이지 않는 엘리먼트 요소를 선택
- find : 비동기 요소를 선택

[All]

- (exclude) : 하나만 맞는 걸 매칭
- (include) : 하나 이상 맞는 걸 매칭

배열과 객체는 toEqual을 사용해서 테스트를 한다.

axios를 사용할 시 비동기식으로 작동하기 때문에 테스트에 있어서 async, await, find를 이용해 테스트를 작성한다.
