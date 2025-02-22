// NextJS
import { getSession, signOut } from "next-auth/react";

// Axios
import axios from "axios";

// Instance
export const axiosInstance = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Interceptors
axiosInstance.interceptors.request.use(
    async function (config) {
        const session = await getSession();

        if (session) {
            config.headers.Authorization = `Bearer ${session?.user?.id}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const session = await getSession();

        if (
            error.response.status === 401 &&
            !originalRequest._retry &&
            session
        ) {
            /* originalRequest._retry = true;

            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
                {
                    refresh_token: session?.user?.refresh_token,
                }
            );

            if (res.status === 200) {
                const { access_token } = res.data;

                originalRequest.headers.Authorization = `Bearer ${access_token}`;

                // return axiosInstance(originalRequest);
                return axios(originalRequest);
            } else {
                signOut();
                return Promise.reject(error);
            } */

            signOut({ callbackUrl: "/" });
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);
