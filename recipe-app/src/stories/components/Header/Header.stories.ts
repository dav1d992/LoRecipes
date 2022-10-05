import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { HeaderComponent } from 'src/app/header/header.component';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { RecipesService } from 'src/app/recipes/recipes.service';

export default {
  title: 'Example/Header',
  component: HeaderComponent,
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


// class MockRecipesService implements Partial<RecipesService> {
//   storeRecipes = () => [
//     new Recipe(
//       'Butter Chicken',
//       'Indian Dish',
//       'https://s3-eu-west-1.amazonaws.com/images-marleyspoon-production/media/recipes/78426/main_photos/large/indisches_curry_butter_chicken-17fd232d7e2d107442b1530acd1da0bc.jpeg',
//       [
//         new Ingredient('Butter', 1),
//         new Ingredient('Chicken', 1),
//         new Ingredient('Tomato', 2),
//       ]
//     ),
//     new Recipe(
//       'Chicken Curry',
//       'Indian Dish',
//       'https://tipbuzz.com/wp-content/uploads/Spicy-Chicken-thumbnail-500x500.jpg',
//       [new Ingredient('Chicken', 1), new Ingredient('Curry', 3)]
//     ),
//   ]
// }

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const WithLayout = Template.bind({}); 
WithLayout.parameters = {
  layout: 'centered',
}
