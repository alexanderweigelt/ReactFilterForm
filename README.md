# React Filter Form

Example to create a filter form in React.

---

## Introduction

In this section, I will explain how to use React filter in detail.

### React Filter

This React filter is a example that allows users to filter data based on certain criteria, such as color, size, price,
and so on. The filter component in React provides a user-friendly interface to interact with the data and filter it
according to their preferences.

### Development

The given code is a FilterForm component that uses the useFormik hook from the formik library to manage form state and
handle form submission. The component renders two fieldsets, one for size and one for color, each containing multiple
checkboxes. When a checkbox is selected, its value is added to the filter object in the formik state. When the form is
submitted, the filter object is converted to a URL query string and appended to the current URL using the
window.location object.

*The following is a detailed explanation of the development process:*

1. __Initial Values__: The code then defines the initial values for the form using the URLSearchParams object from the
   window.location object. The URLSearchParams object allows us to get the query parameters from the current URL. We use
   the getAll method to get all values for the color and size filters and store them in the initialValues object.

2. __useFormik Hook__: The code then uses the useFormik hook to manage form state and handle form submission. The useFormik
   hook takes an options object that defines the initial values, validation schema, submission function, and other
   options for the form. In this code, we only define the initial values and the submission function. The submitForm
   function takes the values from the formik state and converts them to a URL query string using the URLSearchParams
   object. It then appends the query string to the current URL using the window.location object.

3. __isChecked Function__: The isChecked function takes a value as a parameter and checks if that value is included in the
   filter object in the formik state. It returns a boolean value indicating whether the value is checked or not.

4. __Rendering Components__: The code then renders the filter form using the JSX syntax. The form has two fieldsets, one for
   size and one for color. Each fieldset contains multiple checkboxes that are rendered using the Checkbox component
   from the Chakra UI library. The checkboxes are initialized with the defaultChecked prop, which is set to the value
   returned by the isChecked function for that checkbox value. When a checkbox is selected, its value is added to the
   filter object in the formik state using the handleChange function. The form also has a submit button that triggers
   the handleSubmit function when clicked.

### Try it out

To quickly start the application run:

```
npm install
npm run dev
```

or call the example page: https://alexanderweigelt.github.io/ReactFilterForm/

## Conclusion

In this technical description, we have explained how to use React filter and the development process from the given
code. We have shown how to use the useFormik hook to manage form state and handle form submission, how to use the
URLSearchParams object to get query parameters from the current URL

## Deployment

Deploy React app to GitHub Pages

#### `npm run deploy`

We can deploy our React application by simply running: `npm run deploy`. This will create a bundled version of our React application and push it to a gh-pages branch in our remote repository on GitHub.

