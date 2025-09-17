// NFL JSON schemas for tool parameters

export const nflTeamsSchema = {
  type: "object",
  properties: {
    division: {
      type: "string",
      enum: ["NORTH", "SOUTH", "EAST", "WEST"],
      description: "Filter teams by division",
    },
    conference: {
      type: "string",
      enum: ["AFC", "NFC"],
      description: "Filter teams by conference",
    },
  },
  additionalProperties: false,
};

export const nflTeamByIdSchema = {
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

export const nflPlayersSchema = {
  type: "object",
  properties: {
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

export const nflPlayerByIdSchema = {
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

export const nflGamesSchema = {
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
    weeks: {
      type: "array",
      items: { type: "number" },
      description: "Filter by week numbers",
    },
    postseason: {
      type: "boolean",
      description: "Filter for postseason games",
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

export const nflGameByIdSchema = {
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

export const nflStatsSchema = {
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
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by player IDs",
    },
    game_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by game IDs",
    },
    weeks: {
      type: "array",
      items: { type: "number" },
      description: "Filter by week numbers",
    },
    postseason: {
      type: "boolean",
      description: "Filter for postseason stats",
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

export const nflSeasonStatsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by player IDs",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    postseason: {
      type: "boolean",
      description: "Filter for postseason stats",
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

export const nflStandingsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    conference: {
      type: "string",
      enum: ["AFC", "NFC"],
      description: "Filter by conference",
    },
    division: {
      type: "string",
      enum: ["NORTH", "SOUTH", "EAST", "WEST"],
      description: "Filter by division",
    },
  },
  additionalProperties: false,
};

export const nflPlayerInjuriesSchema = {
  type: "object",
  properties: {
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by player IDs",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
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

export const nflAdvancedStatsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year (required)",
    },
    week: {
      type: "number",
      description: "Week number",
    },
    player_id: {
      type: "number",
      description: "Filter by specific player ID",
    },
    postseason: {
      type: "number",
      description: "Filter for postseason (0 or 1)",
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
  required: ["season"],
  additionalProperties: false,
};
