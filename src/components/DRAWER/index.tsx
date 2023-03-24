import React,{FunctionComponent, ReactNode} from "react";

type drawerProps = {
  children: ReactNode,
  showDetails?:boolean,
  moreOption?:ReactNode,
  visible:boolean
}


const Drawer:FunctionComponent<drawerProps> = ({children, moreOption,showDetails, visible})=>{
    return (
        <>
            {visible && <div className="fixed w-screen h-screen top-0 left-0 flex bg-[#001428] bg-opacity-30">
                <div className="w-8/12 flex justify-center pt-28">
                    {showDetails && <div className="inline-flex w-full justify-center">
                            {moreOption}
                        </div>
                    }
                </div>

                <div className="w-4/12 bg-white h-full overflow-y-scroll">
                    <div className="w-full py-8 px-10">
                        {children}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Drawer