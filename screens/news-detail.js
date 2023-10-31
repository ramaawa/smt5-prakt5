import { Heading, Box, Text, ScrollView, Image, View } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
// Get the params
  const params = route.params.item;

  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView>
      <Image w='100%' h={200} source={{ uri: params.image }} alt=''/>
      <View flex={1} p={"4"}>
        <Text fontSize={'md'}>{params.date}</Text>
        <Box
          py={"4"}
          borderBottomColor={"coolGray.300"} borderBottomWidth={1} flexDirection="row"
          flex={1}>
          <Heading>{params.title}</Heading>
        </Box>
        <Text paddingTop={'4'} fontSize={'lg'} fontWeight={'600'}>{params.content}</Text>
      </View>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
