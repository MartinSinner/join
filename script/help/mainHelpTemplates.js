/**
 * Generates a CSS string containing media query styles for adjusting
 * the layout of the sidebar footer and navigation links on smaller screens.
 *
 * @returns {string} A CSS string with styles for screens with a max-width of 1400px.
 */
function styleContent() {
<<<<<<< HEAD
  return `
        @media (max-width: 1400px) {
=======
    return `
        @media (max-width: 1000px) {
>>>>>>> a4c7ae843e1fe5266354c30e6d6406a2bbe566f5
            .sidebar__container {
                flex-direction: row;
                justify-content: space-between;
            }

            .sidebar__footer {
                display: flex !important;
                flex-direction: row;
                padding-top: 2px;
                width: auto;
                padding: 0 32px;
            }

            .nav-link {
                display: flex;
                align-items: center;
            }
        }

        @media (max-width: 390px) {
            .sidebar__footer {
                padding: 0 10px;
            }
            
            .logInLinkContainer {
                padding: 0 10px;
            }
        }
    `;
}
