/**
 * @file
 */
import React from 'react';
import config from '../../common/commonFunc';
export default class UserManage extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('tijiaoshuju');
        config.fetch({url: '/news', method: 'POST'}).then(function (data) {
            console.log(data);
        });
    }
    render() {
        return (
            <form action="POST" onSubmit={this.handleSubmit}>
                <input type="text"/>
                <button type="submit">提交</button>
            </form>
        );
    }
}
