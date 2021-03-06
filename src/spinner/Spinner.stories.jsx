import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  args: {
    size: "m",
  }
};

const DefaultTemplate = (args) => (
  <Spinner {...args}></Spinner>
);

export const Default = DefaultTemplate.bind({});
