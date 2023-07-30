import Upload from '../Uploading/Uploading';

const Modal = ({ setOpen, images1, setImages1 }) => {
    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "rgba(0,0,0,.7)", position: 'absolute', top: "0", left: '0', display: "flex", justifyContent: 'center', alignItems: "center" }} onClick={() => {
            setOpen(false)
        }} >
            <div onClick={(ev) => {
                ev.stopPropagation()
            }}>
                <Upload setOpen={setOpen} images1={images1} setImages1={setImages1} />
            </div>
        </div>
    )
}
export default Modal;

