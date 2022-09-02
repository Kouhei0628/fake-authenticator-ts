# 入社試験用のアプリケーションに再挑戦

当時は `Fake Code` のリストにおいて乱数と円グラフ部分がアイテムごとに別々に動作していたのを見本通りの形に実装することができた。

```ts:App.tsx

// 円グラフの進捗はグローバルステートで管理→全てのリストの円グラフが一斉同時に進む
export const CountContext = createContext<number>(0);

export default function App() {
  const [count, setCount] = useState<number>(0);
  // 10sごとに擬似乱数生成
  useEffect(() => {
    const tick = () => {
      if (count < 145) {
        setCount(prev => prev + 0.5);
      } else {
        setCount(0);
      }
    };
    const timer = setInterval(() => tick(), 10000 / (145 / 0.5));
    return () => clearInterval(timer);
  }, [count]);
  return (
    <CountContext.Provider value={count}>
      <SMainDiv>
        <SMainTitle>Fake Authenticator</SMainTitle>
        <Action />
      </SMainDiv>
    </CountContext.Provider>
  );
}
```
