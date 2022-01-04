import React, { Component } from 'react'

class ProductAttribute extends Component {
    state = {
        productAttribute: {},
    }
    handleAttribute = (index,name,items,className,type)=> {
        const buttons = document.querySelectorAll(`.btn-${className} .${name}`)
        for(let i = 0 ; i < buttons.length; i++){
            buttons[i].className = buttons[i].className.replace("active" , "")
        }
        if(type == 'swatch'){
            this.handleType(buttons,index)
        }
        buttons[index].className = `${name}`+ " " + "active"
        this.setState({
            productAttribute: {
                ...this.state.productAttribute,
                [name] : { item : items[index], index  } 
            }
        })
    }

    handleType = (buttons,index) => {
        for(let i = 0 ; i < buttons.length; i++){
            buttons[i].style.opacity = 1
        }
        buttons[index].style.opacity = 0.5
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.setSelectedAttributes){
            this.props.setSelectedAttributes(this.state.productAttribute)
        }

    }
    
    render() {
        const { attributes } = this.props
        const className = this.props.className
        return (
            <>
                {
                    attributes.map(({items,name,type}) => (
                        <>
                            <label>
                                    {name}
                            </label>
                            <form  className={"btn" + '-' +`${className}`} value={items.item} onSubmit={this.handleSubmit}>
                                {
                                    items.map((item,index)=> (
                                        <>
                                            {this.props.selectedAttributes ? (
                                                this.props.selectedAttributes[name=name.replaceAll(' ', '-')].index == index ? (
                                                    <button style={type == 'swatch' ? 
                                                        {backgroundColor:item.displayValue,color: 'transparent',opacity: 0.5} : null} 
                                                        className='btn active' disabled>
                                                        {item.displayValue}
                                                    </button>
                                                ) : <button style={type == 'swatch' ? 
                                                        {backgroundColor:item.displayValue,color: 'transparent',opacity: 1} : null} 
                                                        className='btn' disabled> {item.displayValue} 
                                                    </button>
                                            ) :  (
                                                <button style={type == 'swatch' ? 
                                                    {backgroundColor:item.displayValue,color: 'transparent',opacity: 1} : null} 
                                                    className={name=name.replaceAll(' ', '-')}  
                                                    onClick={() =>this.handleAttribute(index,name,items,className,type)}>
                                                    {item.displayValue}       
                                                </button>
                                            )
                                            }
                                        </>

                                    ))
                                }
                            </form>
                        </>
                    ))
                }
            </>
        )
    }
}

export default ProductAttribute
