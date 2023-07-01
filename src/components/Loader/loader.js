import { BallTriangle } from 'react-loader-spinner'

const Loader = () => {
	return (
		<BallTriangle
			height={70}
			width={70}
			radius={5}
			color="#4E4555"
			ariaLabel="ball-triangle-loading"
			wrapperClass={{}}
			wrapperStyle=""
			visible={true}
		/>
	)
}

export default Loader