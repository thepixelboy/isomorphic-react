import React from 'react';
import NotificationService from '../services/NotificationsService';

export default class extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            count: -1
        }
    }

    async componentDidMount() {
        let { count } = await NotificationService.GetNotifications();
        this.setState({
            count
        });
    }

    render() {
        return (
            <section className="mt-3 mb-2">
                <div className="notifications">
                    {this.state.count != -1 ? `${this.state.count} Notifications Awaiting!` : "Loading..."}
                </div>
            </section>
        )
    }
};