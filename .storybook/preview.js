import '../src/index.css';

//parameters are typicaally used to control the behaviour of storybook's features and addons
//In our case we're going to use them to configure how the actions (mocked callbacks) are handled.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

/**
 *  Actions allow us to create callbacks that appear in the actions panel of the stotybook UI when clicked
 
 * So when we build a pin button, we’ll be able to determine in the test UI if a button click is successful.
 */