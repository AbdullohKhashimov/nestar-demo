import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>

        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>

        {/* <Stack>
          <Stack>Events</Stack>
        </Stack> */}
      </Stack>
    </Stack>
  );
};
// withLayoutMain ga Home ni wrap qilsak oziga yutib oladi va uni biz LayoutMain filega uni joylaymiz for rendering purpose
export default withLayoutMain(Home);
