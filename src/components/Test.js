import React, {Component, Fragment} from 'react';
// import Modal from '../modal';


class Test extends Component {
    

    render() {
        // console.log(this.props.modal)
        return (
            <Fragment>
                <div class="container">
                    <div class="wrapper">
                        <button type="button" class="btn btn-large btn-primary" id="modalOpen" >Open Modal</button>
                    </div>
                </div>
                <section class="modal">
                    <div class="modal-overlay" id="modalOverlay">
                        <div class="modal-content">
                            <div class="modal-detail">
                                <span class="modal-icons"><i class="fas fa-envelope"></i></span>
                                <h3 class="title title-medium">Add your email address</h3>
                                <p class="paragraph">
                                    Subscribe our newsletter by added your email address to get the update information.
                                </p>
                            </div>
                            <form name="newsletter" class="form">
                                <div class="form-control">
                                    <label for="email" class="form-label" hidden>Email Address</label>
                                    <input type="email" name="email" id="email" class="form-input" placeholder="Add your email address" required autofocus />
                                    <div class="form-action">
                                        <button type="button" class="btn btn-medium btn-lighten" id="modalClose">Maybe Later</button>
                                        <button type="submit" class="btn btn-medium btn-primary">Add Email</button>
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
}

export default Test