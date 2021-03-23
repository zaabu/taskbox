import React from 'react';

import Task from './Task';


/**
 * To tell storybook about the component we are documenting, we create a default export that contains
 * 
 * Component: the component itself
 * 
 * title: how to refer to the component in the sidebar of the storybook app
 * 
 * excludeStories: exports in the file that should not be rendered as stories by storybook
 * 
 * argTypes: specfify args behavior in each story
 */
export default {
    component: Task,
    title: 'Task',
};

//Returns a rendered element (i.e. a component with a set of props) in a given state---exactly like a Stateless Functional Component.
const Template = args => <Task {...args}/>

/*

Arguments or args for short, allow us to live edit our components with the controls addon without restarting Storybook. 
Once an args value changes so does the component.

*/

/*

When creating a story we use a base task arg to build out the shape of the task the component expects. 
This is typically modelled from what the true data looks like.

*/


//bind: makes a copy ofa function
export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
}
//export a function for each of our test states to generate a story
export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    }
}

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED'
    },
};

