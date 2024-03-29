import SourceLogo from "../assets/images/source-logo.svg";
import "../assets/style/auth.scss";
import { IChildrenProps } from "../common/interfaces";

export const AuthLayout = (props: IChildrenProps) => {
  const demoUserDetails = {
    email: "demo@invasman.com",
    password: "demo1234",
  };

  return (
    <section id="auth-layout" className="vh-100 d-flex align-items-center justify-content-center overflow-hidden">
      <div className="row vw-100">
        <div className="col"></div>
        <div className="col-12 col-sm-8 col-md-4 card border-0">
          <div className="card-body px-5 py-4">
            <div className="card-title d-flex flex-column align-items-center text-center">
              <img src={SourceLogo} alt="Invasman" width={50} />
              <h5 className="my-1">INVASMAN</h5>
              <small className="text-muted">powered by TM</small>
              <h4 className="title my-3">Welcome to Inventorization Asset Management</h4>
              <h6 className="text-secondary font-weight-light">Fill your credentials below</h6>
            </div>
            {props.children}
            <div className="card-footer mt-4 bg-transparent border-0 d-flex justify-content-center gap-2">
              <small className="text-secondary text-center">
                Your credentials are stored in a secure database. We will never share your information with anyone.
              </small>
            </div>
            <hr />
            <div className="card-footer mt-4 bg-transparent border-0 d-flex justify-content-center gap-2">
              <small className="text-secondary text-center">
                You can also use the following credentials to login as a demo user.
                <br />
                <strong>Email:</strong> {demoUserDetails.email} / <strong>Password:</strong> {demoUserDetails.password}
              </small>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
};
