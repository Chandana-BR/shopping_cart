/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense, useContext } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function AuthLayout() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {`Or `}
            <Link
              to="/auth/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default AuthLayout;
