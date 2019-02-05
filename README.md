# Guide lines

- Create a new component using commands mentioned below to generate skeleton of the component and documentation. Need to run same twice, one for component itself and another one for its documentation.

```
npm run generate // select component options and add component definition. Example: CapButton
npm run generate // select documentation and add respective details.
```

- Components name should be in `Pascal Case`.

- Always use unique prefix classname for each component to avoid class name conflicts. Convention to follow is to use format of the component name. For exmple, `clsPrefix` for CapButton component can be `cap-button`, and all the classes used inside CapButton component can use `cap-button` as prefix. `classnames` package can be used for maintaining classnames.

- Always import the colors and typography from `_variables.scss` file.

- Try to avoid the usage of `!important` in styles as much as possible.

- All new components should be published along with their Unit Test Cases.

- Please push the changes immediately after each publish, otherwise we might get confusions in package version.


# Publishing package

- Make sure NPM_TOKEN is set properly
- Check if `scope` is already set to `@capillarytech` using `npm config ls`, if not already then set the scope to `@capillarytech` in `npm login`
- You can check the current version of package in your system using below command
```
npm version
```
- Change the package version using below command
```
npm version <package-version> // package-version format: majorVersion.minorVersion.patch
```
-  Run below command to copy all necessary files to be published
```
npm run build // This will generate build-library folder
```
-  Change directory to build-library
```
cd build-library
```
- Publish the package
```
npm publish
```
- Push all changes
```
git push origin <branch>
```