export const loader = (ReactCmpnt) => {
    return (props) => {
        console.log(props)
        return <ReactCmpnt {...props} >{props.children}</ReactCmpnt>
    }
}

const simpleDiv = (props) => {
    return <div
    // className='formSimpleErrMsgDiv'
    // classname not works bcoz modulecss for thisfile doesnot run in otherinferencefile in debugsession in browser, 
    // and global.css for thisfile not work either.
    >{props.children}</div>
}

export default loader(simpleDiv);

// this cmpnt will return a total result a simple <div>childrn</div>