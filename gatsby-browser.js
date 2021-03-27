/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
    console.log("Gatsby started to change location from", prevLocation, "to", location);
};
