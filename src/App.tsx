import { ConfigProvider } from 'antd'
import CV from '@pages/home/CV';
import json from '@assets/data.json'

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      <CV data={json} />
    </ConfigProvider>
    )
}

export default App
