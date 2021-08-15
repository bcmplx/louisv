import React,{Fragment}  from 'react'
// import ReactDOM from 'react-dom';

function Modal () {
    const modalOverlay = document.getElementById("modalOverlay");
    let modalOpen = document.getElementById("modalOpen");
    let modalClose = document.getElementById("modalClose");

    // Initialize Open Modal by Click Button
    modalOpen.addEventListener("click", () => {
        modalOverlay.classList.add("visible");
    });

    // Initialize Close Modal by Click Button
    modalClose.addEventListener("click", () => {
        modalOverlay.classList.remove("visible");
        clearInputField();
    });

    // Initialize Close Modal by Click Outside
    window.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove("visible");
            clearInputField();
        }
    });

    // Initialize Close Modal by Click Escape
    window.addEventListener("keyup", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("visible")) {
            modalOverlay.classList.remove("visible");
            clearInputField();
        }
    });

    // Initialize preventDefault Submit Button
    window.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    // Initialize Clear Input Filed Function
    const clearInputField = () => {
        setTimeout(() => {
            document.getElementById("email").value = "";
        }, 1000);
    };

    return (
        <Fragment>
                
                <section className="modal">
                    <div className="modal-overlay" id="modalOverlay">
                        <div className="modal-content">
                            <div className="modal-detail">
                                <span className="modal-icons"><i className="fas fa-envelope"></i></span>
                                <h3 className="title title-medium">Add your email address</h3>
                                <p className="paragraph">
                                    Subscribe our newsletter by added your email address to get the update information.
                                </p>
                            </div>
                            <form name="newsletter" className="form">
                                <div className="form-control">
                                    <label for="email" className="form-label" hidden>Email Address</label>
                                    <input type="email" name="email" id="email" className="form-input" placeholder="Add your email address" required autofocus />
                                    <div className="form-action">
                                        <button type="button" className="btn btn-medium btn-lighten" id="modalClose">Maybe Later</button>
                                        <button type="submit" className="btn btn-medium btn-primary">Add Email</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <script>{Modal}</script> */}
                
            </Fragment>
    )
}

export default Modal