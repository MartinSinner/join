/**
 * Generates a CSS string containing media query styles for adjusting 
 * the layout of the sidebar footer and navigation links on smaller screens.
 * 
 * @returns {string} A CSS string with styles for screens with a max-width of 1400px.
 */
function styleContent() {
    return `
        @media (max-width: 1400px) {
            .sidebar__footer {
                display: flex !important;
                flex-direction: row;
                justify-content: space-around;
                padding-top: 2px;
            }
        
            .nav-link {
                display: flex;
                align-items: center;
            }
        }
    `;
}