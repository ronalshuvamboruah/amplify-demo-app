import "@aws-amplify/ui-react"
import logo from "./logo.svg"
import{
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
}from "@aws-amplify/ui-react"
function App({signOut}) {
  return (
   <View>
    <Card>
      <Image src={logo} className="App-logo" alt="logo"/>
      <Heading level={1}>We have now auth</Heading>
    </Card>
    <Button onClick={signOut}>Sign Out</Button>
   </View>
  )
}

export default withAuthenticator(App)