import {LOCALSTORAGE_USERID_KEY} from "../constants/board-constants";
import {Navigate, useLoaderData} from "react-router-dom";
import {supabase} from "../supabase_setup";
import ViewProfile from "../components/profile/ViewProfile";

export async function loader() {
    const userid = localStorage.getItem(LOCALSTORAGE_USERID_KEY)

    const userDB = userid == null
        ? null
        : await supabase.from('tblUsers')
            .select('*')
            .eq('UserId', userid)
            .single()

    return { userid, userDB }
}

export function Component() {
    const { userid, userDB } = useLoaderData() as Awaited<ReturnType<typeof loader>>

    if (userid == null || userDB == null || userDB.error != null)
        return <Navigate to='/' replace={true}/>

    return <ViewProfile userid={userid} userDB={userDB}/>
}