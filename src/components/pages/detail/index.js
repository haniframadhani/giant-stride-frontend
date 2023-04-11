import Head from "next/head";
import { useEffect } from "react";

export default function Detail() {
  useEffect(() => {
    document.body.className = 'bg-gradient-to-b from-[#339CF0] from-0% via-[#004E98] via-60% to-[#020024] to-100%';
  }, []);
  return (
    <div className="mx-8 md:mx-10 mt-20 mb-16 text-center text-white font-['Poppins']">
      <Head>
        <title>halaman detail</title>
      </Head>
      <div className="mx-auto md:w-10/12 aspect-video overflow-hidden rounded-lg">
        <img className="object-cover w-full h-full" src="https://source.unsplash.com/random/300×300/?diving" alt="" />
      </div>
      <div className="md:w-4/6 lg:w-8/12 mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mt-10 font-medium">halaman detail</h1>
        <p className="text-sm text-light-gray mt-2 mb-8 text-['Inter'] font-normal">April, 07 2023</p>
        <div className="text-start grid gap-6 text-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed feugiat nunc, at feugiat turpis. Vivamus vel nunc et nulla placerat lacinia a vel tortor. Nulla venenatis volutpat arcu, eu rutrum turpis auctor id. Nam tincidunt nibh id tortor convallis, vitae hendrerit nisl tempus. Praesent at viverra erat. Etiam a neque ut metus condimentum commodo. Curabitur nisl eros, finibus id mauris vitae, venenatis porta lectus. Cras eros risus, dictum vitae lacus non, fermentum pretium purus. Nullam dui ante, facilisis ut pharetra vel, porttitor vel nisi. Nulla eleifend interdum turpis, quis rutrum magna aliquet ut. Phasellus non turpis finibus, egestas neque a, sodales arcu. Maecenas eget consectetur lacus. Duis ut maximus odio. Duis tortor mauris, semper ut justo id, ornare pharetra est. Nullam quis aliquet ligula.</p>
          <p>Donec cursus scelerisque odio, in pellentesque mi fermentum vitae. Aliquam posuere diam sed orci tristique fermentum. In sem elit, volutpat in consectetur sit amet, pretium non mi. Integer porttitor consequat dignissim. Suspendisse tincidunt mauris eu diam scelerisque, id sollicitudin mi tristique. In tellus neque, maximus a commodo non, hendrerit ac nisi. Cras et pretium nibh, at convallis ligula. Nullam tincidunt rutrum lacus sed rutrum. Fusce a sapien nisi. Praesent augue velit, posuere ac rutrum at, lobortis vel enim. Nam aliquet, augue id eleifend cursus, lectus felis eleifend arcu, eu congue mi mauris et arcu. Suspendisse elementum nulla ipsum, eget fermentum libero sollicitudin ac. Nulla orci massa, accumsan vel rutrum ut, vestibulum at ipsum. Maecenas rhoncus porta mollis. Cras eget ullamcorper libero. Etiam non augue scelerisque, viverra eros nec, accumsan elit.  </p>
        </div>
      </div>
    </div>
  )
}