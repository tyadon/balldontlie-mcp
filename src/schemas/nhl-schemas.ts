// NHL JSON schemas for tool parameters

export const nhlTeamsSchema = {
  type: "object",
  properties: {
    conference: {
      type: "string",
      description: "Filter teams by conference",
    },
    division: {
      type: "string",
      description: "Filter teams by division",
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

export const nhlTeamByIdSchema = {
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

export const nhlTeamSeasonStatsSchema = {
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
  },
  required: ["id"],
  additionalProperties: false,
};

export const nhlTeamStatsLeadersSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    type: {
      type: "string",
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

export const nhlPlayersSchema = {
  type: "object",
  properties: {
    search: {
      type: "string",
      description: "Search players by name",
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
    position: {
      type: "string",
      description: "Filter by player position",
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

export const nhlPlayerByIdSchema = {
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

export const nhlPlayerSeasonStatsSchema = {
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
  },
  required: ["id"],
  additionalProperties: false,
};

export const nhlPlayerStatsLeadersSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    type: {
      type: "string",
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

export const nhlGamesSchema = {
  type: "object",
  properties: {
    dates: {
      type: "array",
      items: { type: "string", format: "date" },
      description: "Filter by specific dates (YYYY-MM-DD format)",
    },
    seasons: {
      type: "array",
      items: { type: "number" },
      description: "Filter by seasons",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    season_type: {
      type: "string",
      enum: ["regular", "playoffs"],
      description: "Filter by season type",
    },
    start_date: {
      type: "string",
      format: "date",
      description: "Start date for date range filter (YYYY-MM-DD)",
    },
    end_date: {
      type: "string",
      format: "date",
      description: "End date for date range filter (YYYY-MM-DD)",
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

export const nhlGameByIdSchema = {
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

export const nhlStandingsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    conference: {
      type: "string",
      description: "Filter by conference",
    },
    division: {
      type: "string",
      description: "Filter by division",
    },
  },
  additionalProperties: false,
};

export const nhlBoxScoresSchema = {
  type: "object",
  properties: {
    dates: {
      type: "array",
      items: { type: "string", format: "date" },
      description: "Filter by specific dates",
    },
    seasons: {
      type: "array",
      items: { type: "number" },
      description: "Filter by seasons",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    game_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by game IDs",
    },
    season_type: {
      type: "string",
      enum: ["regular", "playoffs"],
      description: "Filter by season type",
    },
    start_date: {
      type: "string",
      format: "date",
      description: "Start date for date range filter",
    },
    end_date: {
      type: "string",
      format: "date",
      description: "End date for date range filter",
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
