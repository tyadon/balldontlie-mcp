// EPL JSON schemas for tool parameters

export const eplTeamsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
  },
  required: ["season"],
  additionalProperties: false,
};

export const eplTeamByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the team to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplTeamPlayersSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the team",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplTeamSeasonStatsSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the team",
    },
    season: {
      type: "number",
      description: "Season year",
    },
    stat_types: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "wins",
          "losses",
          "touches",
          "own_goals",
          "total_yel_card",
          "total_red_card",
          "goals",
          "total_pass",
          "total_scoring_att",
          "total_offside",
          "hit_woodwork",
          "big_chance_missed",
          "total_tackle",
          "total_clearance",
          "clearance_off_line",
          "dispossessed",
          "clean_sheet",
          "saves",
          "penalty_save",
          "total_high_claim",
          "punches",
        ],
      },
      description: "Types of statistics to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplTeamStatsLeadersSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    type: {
      type: "string",
      enum: [
        "wins",
        "losses",
        "touches",
        "own_goals",
        "total_yel_card",
        "total_red_card",
        "goals",
        "total_pass",
        "total_scoring_att",
        "total_offside",
        "hit_woodwork",
        "big_chance_missed",
        "total_tackle",
        "total_clearance",
        "clearance_off_line",
        "dispossessed",
        "clean_sheet",
        "saves",
        "penalty_save",
        "total_high_claim",
        "punches",
      ],
      description: "Type of statistic to get leaders for",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const eplStandingsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
  },
  additionalProperties: false,
};

export const eplPlayersSchema = {
  type: "object",
  properties: {
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by specific player IDs",
    },
    season: {
      type: "number",
      description: "Season year",
    },
    search: {
      type: "string",
      description: "Search players by name",
    },
    first_name: {
      type: "string",
      description: "Filter by first name",
    },
    last_name: {
      type: "string",
      description: "Filter by last name",
    },
  },
  required: ["season"],
  additionalProperties: false,
};

export const eplPlayerByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the player to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplPlayerSeasonStatsSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the player",
    },
    season: {
      type: "number",
      description: "Season year",
    },
    stat_types: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "goals",
          "goal_assist",
          "clean_sheet",
          "appearances",
          "mins_played",
          "yellow_card",
          "red_card",
          "total_pass",
          "touches",
          "total_scoring_att",
          "hit_woodwork",
          "big_chance_missed",
          "total_offside",
          "total_tackle",
          "fouls",
          "dispossessed",
          "own_goals",
          "total_clearance",
          "clearance_off_line",
          "saves",
          "penalty_save",
          "total_high_claim",
          "punches",
        ],
      },
      description: "Types of statistics to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplPlayerStatsLeadersSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    type: {
      type: "string",
      enum: [
        "goals",
        "goal_assist",
        "clean_sheet",
        "appearances",
        "mins_played",
        "yellow_card",
        "red_card",
        "total_pass",
        "touches",
        "total_scoring_att",
        "hit_woodwork",
        "big_chance_missed",
        "total_offside",
        "total_tackle",
        "fouls",
        "dispossessed",
        "own_goals",
        "total_clearance",
        "clearance_off_line",
        "saves",
        "penalty_save",
        "total_high_claim",
        "punches",
      ],
      description: "Type of statistic to get leaders for",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const eplGamesSchema = {
  type: "object",
  properties: {
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
    season: {
      type: "number",
      description: "Filter by season",
    },
    team_id: {
      type: "number",
      description: "Filter by team ID",
    },
    week: {
      type: "number",
      description: "Filter by week",
    },
  },
  additionalProperties: false,
};

export const eplGameByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the game to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplGameLineupsSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the game",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplGameGoalsSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the game",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplGameTeamStatsSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the game",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplGamePlayerStatsSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the game",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const eplBettingOddsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Filter by season (must be provided with week)",
    },
    week: {
      type: "number",
      description: "Filter by week (must be provided with season)",
    },
    game_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by game IDs",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};
