const a=[.1,.03,0,.69,0,.34,.05,.03,.15,.11,.54,.21,.93,0,.13,.48,.01,.85,.12,.48,.69,0,.01,.56,0,0,0,.41,.25,0,0,0,0,.37,.32,.75,0,.11,.16,.03,.1,0,.01,.76,.9,.58,.6,.1,.01,0,.02,.28,.05,0,0,.08,.06,.02,0,.01,0,0,0,.59,.32,0,0,.28,.93,.82,.56,.08,0,0,0,.01,.02,0,0,.06,0,.04,.86,0,.78,0,0,.64,0,0,0,.48,0,.02,.17,.91,0,.07,.43,0,.59,0,0,.4,0,.36,.2,.5,0,0,.62,0,.99,.07,.13,.01,.8,0,.01,0,.38,0,.19,.03,.89,0,0,.16,0,0,.02,.29,.56,.01,.7,.62,.01,0,0,.73,0,.26,0,0,.38,.19,.55,.8,0,.41,0,.03,.94,.13,.02,0,.71,.71,.04,.2,.12,0,.2,.01,0,0,.1,0,.6,0,.39,.08,.02,.87,0,0,.82,0,0,0,.24,.37,.88,.06,0,.69,.6,.48,.01,.06,.08,0,.65,0,0,0,0,.05,.38,0,.03,0,0,.12,0,0,.84,0,0,.64,.01,.1,.07,0,.03,.15,.14,.01,0,.14,0,0,0,0,0,0,.01,0,0,.27,.79,.28,0,0,.74,.11,.29,.53,.23,.96,0,.15,.1,.1,0,.18,.54,.18,.87,.49,.1,0,0,.58,0,.18,.25,.01,.02,.01,.36,.03,0,0,.92,0,.01,0,.67,0,.02,.2,0,0,0,.53,.03,0,0,.01,0,.01,.03,0,0,0,.05,0,.01,.01,.52,0,0,.15,.04,.01,.48,.26,.13,0,.26,0,0,.57,.34,.2,.54,0,.02,.78,0,.93,.8,.41,.08,0,0,0,0,.02,0,.83,.06,0,.01,0,0,.54,.62,0,0,0,.94,.2,0,.78,0,0,.49,0,0,.07,.87,.82,0,0,.23,0,.03,.01,0,.26,.14,0,.06,0,.01,.09,0,0,.01,.98,.01,.22,.26,0,.04,0,0,.72,.09,.04,.05,.73,.02,0,.57,0,.23,0,.18,.97,.62,.84,.66,.12,.1,.47,0,0,0,.56,.22,.55,.42,0,0,.03,.95,.71,.56,.03,0,.02,.06,.93,.01,0,0,0,0,.04,.4,0,.05,.75,0,.01,0,.01,.04,0,.01,.12,.28,0,0,.28,.01,.71,.19,.78,0,.66,0,0,.98,0,0,0,0,0,0,.72,0,0,0,0,.23,.03,0,0,0,.38,.92,.67,0,0,.01,0,0,0,0,0,.88,.35,.24,.5,0,0,.55,0,.02,.36,0,0,0,.02,0,0,0,.01,0,0,0,.31,0,.57,.89,.01,.61,.15,.9,.54,0,0,.01,.3,.02,.15,0,.45,0,.02,0,.34,.45,0,.01,0,0,.11,0,.97,0,0,.03,0,0,0,.01,0,.4,.94,.01,.4,.5,.02,.2,0,0,.03,.18,.04,.36,.45,.01,.49,.85,.17,.05,0,.49,.15,.01,.92,.57,.08,0,.67,0,0,0,.01,0,.97,0,.24,.02,.76,0,0,.02,.09,.56,.53,.22,.7,.07,.42,0,0,.09,.81,0,0,.35,0,0,.91,.01,.21,0,.08,0,.01,0,0,.01,0,.42,.45,.95,0,.12,0,0,0,0,.14,.02,0,0,.03,.02,0,0,.03,.84,.72,.86,.02,.71,0,.57,.24,0,.12,.13,.97,.35,.9,.1,.04,.07,.39,0,.01,0,.41,.46,0,0,0,.09,0,0,.01,.04,0,.03,0,0,.74,.08,0,.84,0,.27,0,.89,0,.03,0,0,.72,.05,.17,.35,.45,0,.01,0,0,.06,.13,.74,.13,0,0,0,.81,.18,0,0,.27,0,0,0,.36,.11,.78,.43,0,.02,.21,0,0,0,.44,.96,.07,.37,.11,.23,.88,.12,.07,0,.01,0,.04,0,.01,.65,.82,.02,.06,.84,0,0,.5,.08,.04,.24,.72,.42,.27,0,.7,.02,0,0,.28,.01,.38,.07,0,.36,0,0,.01,0,.62,0,.01,0,.22,.4,.85,.48,.05,0,.02,.43,0,.01,.01,.62,0,.54,.06,.26,.04,0,.81,.49,.6,.01,.08,.43,0,0,0,.71,0,0,.36,.18,.32,.57,.05,0,.18,0,.02,.06,.04,0,0,0,.09,.16,0,0,0,0,0,.67,0,0,.87,0,.24,0,0,0,0,.03,0,.66,.16,.01,0,.01,0,0,0,0,.54,.46,.09,0,0,0,.07,0,0,.11,0,.33,.09,.13,.02,.63,0,.05,.01,.03,.88,.39,0,0,.48,.54,.08,.26,.45,.34,0,0,.02,.58,.12,0,0,.71,0,0,.01,.44,0,0,.93,.13,.32,0,.01,0,.11,0,0,.13,0,.54,.02,0,.31,.1,.14,.64,.22,.42,0,.19,0,.35,.22,.03,.38,0,0,.97,0,.01,.09,0,.02,0,.1,0,0,0,0,0,.99,.17,.36,.01,0,.61,.03,.59,.58,.66,0,.24,0,.8,.03,.81,.03,0,.39,0,.08,.58,.11,.57,.37,.15,.09,.16,.01,0,0,.26,0,0,0,0,0,0,0,0,0,0,.39,0,0,.75,.7,.11,0,.26,.56,.06,0,.31,.81,.12,.91,.31,.28,.01,.11,0,.7,0,.72,0,.18,.05,.93,0,.98,.28,.64,0,.36,.01,.91,.5,0,0,.65,.06,.01,0,0,0,.04,0,.01,.06,.15,.55,.48,.9,0,0,.13,0,.1,.58,.01,.36,.09,.75,.53,.64,.69,.75,.9,.68,.81,.59,.62,0,.63,.66,0,.07,.05,.31,.93,0,.26,.6,.92,0,.95,.13,0,.3,.01,0,.73,.71,.12,.09,.03,.81,0,.86,0,0,.37,.03,.24,.37,0,.01,.45,.24,0,.32,.24,0,0,0,0,.31,.38,.55,.88,.12,.14,.42,0,.04,.72,.82,.01,0,.04,0,0,.01,.27,.01,.01,0,.01,.56,.01,0,.16,0,0,.36,0,.32,.46,0,.03,.01,.07,0,0,.81,.18,0,0,.02,0,.15,.18,0,0,.54,0,.35,.1,.01,.01,.03,.91,.01,.45,.13,0,0,.87,0,.07,.68,0,.01,0,.01,.09,.41,.3,.27,.49,.94,.04,0,.26,.22,0,0,.01,.48,0,0,.23,.16,.99,0,.15,.99,.18,0,.35,0,.91,0,.91,.81,.18,0,0,.14,0,.42,.07,.66,.59,0,.07,.61,0,.01,.85,0,0,0,0,.01,.1,.01,0,0,.23,.01,.45,.02,.59,.1,.11,.08,.04,.11,.29,0,0,.6,.01,.64,.7,.13,.21,0,.19,.46,0,0,0,.01,0,.57,0,.01,0,.75,0,0,.01,0,.7,0,.44,0,.07,.95,0,0,.55,.49,0,.01,.32,.37,0,.9,0,0,0,.01,.38,0,.34,0,0,0,.61,.43,.36,.01,0,0,.58,.29,.07,.9,.01,0,.58,0,.4,.47,.01,.97,.2,0,0,.14,0,0,.01,.26,.3,.03,0,0,0,0,.84,0,.78,0,.62,.02,.28,.15,.12,.54,.47,0,.63,.01,.01,.41,.49,0,.61,.79,.17,.29,0,0,0,.29,.02,.52,0,0,0,0,0,.46,.18,.63,.07,0,.27,0,.06,0,.01,0,.04,.95,.71,.03,0,0,.43,.01,.49,.08,.6,.04,.53,.02,0,0,0,.46,0,.74,0,.61,.51,.34,.47,.42,0,0,.02,.22,.5,.34,.58,.01,0,.77,.03,0,.01,0,0,.49,0,.02,0,.81,.01,.01,0,.14,.81,.9,.16,0,0,.62,.11,.01,.22,.09,.01,0,.39,.37,.77,.04,.38,.6,.88,.56,.44,.16,.04,.53,.51,0,0,.01,0,0,0,0,.3,.07,.1,0,.12,.02,.43,.32,0,0,.15,.15,0,0,.56,0,0,.01,.28,.75,0,.58,.48,.03,.06,.18,.18,.03,.02,.44,.04,0,.67,.02,0,.16,.09,0,0,0,0,.16,.45,0,.92,0,.06,.93,0,.77,.08,.55,.32,.64,.05,.01,.81,.43,0,0,0,.01,.04,.41,.06,.59,.01,.7,.01,0,0,.02,.05,.22,.02,0,.1,.51,.01,0,.68,0,0,0,.35,.17,.01,.58,0,.07,0,0,.82,.88,0,.61,0,0,.05,.26,0,.89,.47,.43,0,.46,.43,0,0,.05,0,0,.01,.09,.09,0,.78,.88,0,.71,.34,0,.07,0,.22,0,0,0,.23,.09,.47,0,.54,.48,0,.11,0,0,0,0,.5,0,0,0,0,0,0,0,0,0,.02,.22,0,0,.52,0,.39,0,0,.44,0,0,.23,0,0,.78,.59,0,0,0,0,.03,0,.12,.17,0,0,0,0,.2,0,.01,0,0,.07,.65,.13,0,.01,0,0,0,.12,0,0,0,.02,.1,.02,.22,.02,.01,0,.3,.01,.06,0,0,.01,0,0,.19,.24,0,0,0,0,.47,.42,0,.14,0,0,0,0,.45,0,.18,0,.77,.01,.33,.02,.46,0,0,.98,0,.35,0,.35,.01,0,0,0,0,0,.1,.1,.03,0,.04,.69,.13,0,0,0,.25,0,.07,.91,0,0,0,.03,.43,0,0,0,0,.1,0,0,0,0,.9,0,.62,.97,0,.47,0,1,0,0,.87,0,.35,.01,.87,0,0,.22,.01,.21,.21,0,.29,.02,.69,0,0,.25,.26,0,.53,.14,0,0,0,.39,.65,.55,0,.97,0,.11,0,0,.06,0,0,.13,.52,0,0,0,0,.18,0,0,0,.03,.16,.38,.03,.1,.01,0,0,0,.19,0,0,0,.26,.63,.13,.36,0,.02,.02,.05,0,.01,.75,0,.08,0,0,.27,.56,.05,.04,.36,.04,0,.08,.12,.62,.43,.44,.3,0,0,.51,0,0,.32,0,.72,0,0,.57,0,0,0,.19,.94,0,.36,0,0,0,.56,0,0,0,0,0,.01,.93,0,0,0,0,0,.55,.15,0,.97,0,.58,0,0,0,.01,0,0,0,.46,0,.58,.54,0,.01,.23,.09,0,.01,0,.01,0,.06,0,0,.16,.87,.43,.81,.36,.45,.11,.53,.11,.32,0,.41,.02,.59,.03,.55,.64,.21,.03,0,.44,.01,0,0,.08,0,.77,.44,.41,.75,0,.68,.01,0,0,.06,.98,0,.81,0,.15,0,.22,0,0,.85,.46,.36,.51,.98,.02,.06,.28,0,0,0,0,.16,.27,0,0,0,.01,.79,.7,0,.01,.47,0,0,.12,0,.31,0,0,0,.06,.01,0,0,.62,0,0,.84,.11,.07,0,.44,.45,0,.03,.92,0,.36,.36,.38,0,0,.14,0,.38,.22,.43,.04,.42,.77,.81,0,.61,0,0,0,.02,0,0,0,0,0,.82,.57,0,0,.01,.31,.73,.35,.06,0,0,.86,0,.82,.07,0,.62,0,.98,.25,0,.55,.4,.52,0,0,0,0,0,.8,0,.37,.23,.83,.78,.41,0,0,0,.1,0,0,.02,.17,0,0,0,0,.71,0,0,0,0,0,.2,0,.82,0,0,.01,.05,0,0,0,0,0,.01,.01,0,1,0,.08,0,0,0,0,0,.53,0,.06,.1,0,0,.14,0,.59,.41,0,.05,0,0,.01,.38,.03,.01,0,.08,.01,0,0,1,0,.76,.1,.16,.08,.01,.87,.93,0,.04,.4,0];export{a as pvalData};
