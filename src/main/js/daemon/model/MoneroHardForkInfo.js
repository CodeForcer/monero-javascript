/**
 * Monero hard fork info.
 */
class MoneroHardForkInfo {
  
  constructor() {
    this.state = {};
  }
  
  getEarliestHeight() {
    return this.state.earliestHeight;
  }

  setEarliestHeight(earliestHeight) {
    this.state.earliestHeight = earliestHeight;
    return this;
  }

  isEnabled() {
    return this.state.isEnabled;
  }

  setIsEnabled(isEnabled) {
    this.state.isEnabled = isEnabled;
    return this;
  }

  getState() {
    return this.state.state;
  }

  setState(state) {
    this.state.state = state;
    return this;
  }

  getThreshold() {
    return this.state.threshold;
  }

  setThreshold(threshold) {
    this.state.threshold = threshold;
    return this;
  }

  getVersion() {
    return this.state.version;
  }

  setVersion(version) {
    this.state.version = version;
    return this;
  }

  getNumVotes() {
    return this.state.numVotes;
  }

  setNumVotes(numVotes) {
    this.state.numVotes = numVotes;
    return this;
  }

  getWindow() {
    return this.state.window;
  }

  setWindow(window) {
    this.state.window = window;
    return this;
  }

  getVoting() {
    return this.state.voting;
  }

  setVoting(voting) {
    this.state.voting = voting;
    return this;
  }
}

module.exports = MoneroHardForkInfo;