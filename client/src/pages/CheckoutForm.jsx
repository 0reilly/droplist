import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import "../App.css"

const CheckoutForm = (props) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    let history = useHistory();

    useEffect(() => {
        console.log(succeeded)
        window.scrollTo(0, 0);
    }, []);

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const paymentIntent = async (e) => {
        e.preventDefault();

        window
            .fetch("http://localhost:5500/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({items: [{price: props.price}]})
            })
            .then(res => {

                return res.json();

            })
            .then(data => {
                console.log("payment intent created" + data.clientSecret)
                handleSubmit(data.clientSecret);
            });
    }

    const handleSubmit = async (clientSecret) => {
        console.log("confirming payment")
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {

            setError(null);
            setProcessing(false);
            setSucceeded(true);
            handleForm();
        }
    };

    const goHome = () => {
        history.push("/")
    }

    const handleForm = () => {
        props.form();
    }
    return (
        <form id="payment-form" onSubmit={paymentIntent}>
            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
            <div className={succeeded ? "p-4 row justified-content-center result-message hidden" : "p-4 row justified-content-center result-message"}>
                <button
                    disabled={processing || disabled || succeeded}
                    className="col btn btn-primary"
                >
        <span id="button-text">
          {processing ? (
              <div className="spinner" id="spinner"></div>
          ) : (
              "Post Job Ad"
          )} ${props.price / 100}
        </span>
                </button>
            </div>
            {/* Show any error that happens when processing the payment */}
            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}
            {/* Show a success message upon completion */}
            <div className={succeeded ? "p-4 justify-content-center result-message" : "p-4 justify-content-center result-message hidden"}>
                <div className="row">
                    <button className="btn btn-primary" onClick={goHome}>
                        Home.
                    </button>
                </div>
                <div className="row">
                    <p>
                        Payment succeeded! View your new listing on the Home page! An order summary will be emailed to you.
                    </p>
                </div>
            </div>

        </form>
    );
}

export default CheckoutForm
