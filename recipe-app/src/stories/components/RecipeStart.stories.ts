import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';

export default {
  title: 'Example/RecipeStart',
  component: RecipeStartComponent,
  decorators: [
    moduleMetadata({
        imports: [CommonModule, HttpClientModule],
    }),
],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;


const Template: Story<RecipeStartComponent> = (args: RecipeStartComponent) => ({
  component: RecipeStartComponent,
  props: args,
});

export const WithDis = Template.bind({}); 
WithDis.parameters = {
  layout: 'centered',
}
