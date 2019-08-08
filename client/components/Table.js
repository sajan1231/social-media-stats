import React, { Component } from "react";

class Table extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<table class="content-table">
					<thead>
						<tr>
							<th>DATES</th>
							<th>FOLLOWING</th>
							<th>FOLLOWERS</th>
							<th>TWEETS</th>
							<th>LIKES</th>
							<th>RETWEETS</th>
						</tr>
					</thead>
					<tbody>
						{this.props.tableData.map(day => {
							return (
								<>
									<tr>
										<td>{day[0]}</td>
										<td>{this.props.user.friends_count}</td>
										<td>{this.props.user.followers_count}</td>
										<td>{this.props.user.statuses_count}</td>
										<td>{day[1].totalLikes}</td>
										<td>{day[1].totalRT}</td>
									</tr>
								</>
							);
						})}
					</tbody>
				</table>
			</>
		);
	}
}

export default Table;
