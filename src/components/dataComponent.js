import React from "react";

export default class DataComponent extends React.Component {
  state = {
    loading: true,
    data: null
  };

  async componentDidMount() {
    const url = "https://hpb.health.gov.lk/api/get-current-statistical";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.data) {
      return <div>didn't get data</div>;
    }

    return (
      <div>
        <div>
            
            {JSON.stringify(this.state.data)}
        </div>

      </div>
    );
  }
}