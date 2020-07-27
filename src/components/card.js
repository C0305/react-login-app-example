import React from "react";


function Card({title, text, img, featured, body}) {
    return (
        <>
            <div className="card">
                <div className="card__featured">
                    {featured ? featured : (
                        <img alt={title} src={img}/>
                    )}
                </div>
                <div className="card__body">
                    {body ? body : (
                        <>
                            <h4 className="card__title">
                                {title}
                            </h4>
                            <p className="card__text">
                                {text}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Card