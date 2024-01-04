import PropTypes from 'prop-types'

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default function Title(props){

    return (
        <section>
              <h1 className='text-2xl'>{props.title}</h1>
        </section>
    )
}