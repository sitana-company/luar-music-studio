import { connect } from 'react-redux';

import Builder from "../../../common/Builder";
import LuarHeader from "../../../base/LuarHeader";
import LuarFooter from '../../../base/LuarFooter';

import "./index.less";

const Luar = ({ page, loggedUserInfo }) => {
    const canEdit = ["administrator", "editor"].some(
        (g) => loggedUserInfo?.groups?.some((group) => group?.code === g)
    );

    return (
        <div className="luar-template">
            <LuarHeader canEdit={canEdit} />
            <Builder page={page} canEdit={canEdit} />
            <LuarFooter />
        </div>
    );
};

const mapStateToProps = (store) => ({
    loggedUserInfo: store.loggedUserInfoState.loggedUserInfo,
});

export default connect(mapStateToProps)(Luar);
