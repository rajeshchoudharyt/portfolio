export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center gap-y-4 text-stone-400 bg-stone-800 pt-20 pb-8">
            <h2 className="text-center text-2xl font-bold mb-12 text-orange-600">
                Contact
            </h2>
            <div className="flex flex-col justify-center items-center gap-y-4">
                <svg viewBox="0 0 64 64" className="w-7 h-7 fill-white">
                    <path d="M50.4,18.41a18.4,18.4,0,1,0-36.8,0C13.6,28.57,32,54.26,32,54.26S50.4,28.57,50.4,18.41ZM20,18.41a12,12,0,1,1,12,12A12,12,0,0,1,20,18.41Z"></path>
                    <path d="M41.26,43c-1.38,2.25-2.72,4.33-3.9,6.11,5,.68,8.5,2.28,8.5,4.16,0,2.48-6.2,4.5-13.86,4.5s-13.86-2-13.86-4.5c0-1.89,3.52-3.49,8.51-4.16-1.18-1.78-2.52-3.87-3.9-6.12C10.65,44.36,1.91,48.42,1.91,53.23,1.91,59.18,15.38,64,32,64s30.09-4.82,30.09-10.77C62.09,48.42,53.35,44.36,41.26,43Z"></path>
                </svg>
                <h4 className="text-xs font-semibold tracking-wider text-orange-600">
                    WHERE TO FIND ME
                </h4>
                <p className="text-center text-sm">
                    Bengaluru, Karnataka, India
                    <br /> 561203 IN
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4 my-10">
                <svg viewBox="0 0 128 96" className="w-6 h-6 fill-white">
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                </svg>
                <h4 className="text-xs font-semibold tracking-wider text-orange-600">
                    EMAIL ME AT
                </h4>
                <a href="mailto:rajeshchoudharyt@gmail.com" className="text-sm">
                    rajeshchoudharyt@gmail.com
                </a>
            </div>
            <div className="flex justify-center items-center gap-x-6">
                <a
                    href="https://www.linkedin.com/in/rajesh-t-050b76284"
                    target="_blank">
                    <svg
                        viewBox="0 0 24 24"
                        id="linkedIn"
                        className="w-6 h-6 fill-white ">
                        <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
                    </svg>
                </a>
                <a href="https://github.com/rajeshchoudharyt" target="_blank">
                    <svg
                        viewBox="0 0 24 24"
                        id="github"
                        className="w-6 h-6 fill-white">
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                </a>
            </div>

            <p className="text-sm">
                Designed and Developed by
                <span className="text-white"> Rajesh</span>
            </p>
        </section>
    );
}
