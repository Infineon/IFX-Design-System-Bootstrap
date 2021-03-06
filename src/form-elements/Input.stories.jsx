import { Input } from "./Input";

export default {
  title: "Forms/Input",
  component: Input,
  args: {
    label: "Label",
    size: "m",
    disabled: false,
    state: "default",
  }
};

const DefaultTemplate = (args) => (
  <Input {...args}></Input>
);

export const Default = DefaultTemplate.bind({});
