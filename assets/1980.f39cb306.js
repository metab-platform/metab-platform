const a=[.01,.33,.05,.14,0,.73,0,0,0,.04,.17,.88,.36,0,.29,.44,.49,.97,.6,.4,.33,0,.1,.73,0,0,0,.32,.04,0,0,0,0,.21,.03,.73,.09,.25,0,.11,.88,0,.04,.14,.03,.75,.37,.05,0,0,0,.01,.69,0,0,.03,0,.58,.08,0,0,0,0,.54,.94,0,0,.74,.99,.34,.26,.17,0,.04,0,.19,.02,0,.39,0,0,0,.82,0,.72,0,0,.29,.01,.04,0,.26,0,.01,.78,0,0,0,.43,0,.11,0,0,.05,0,.06,.04,.51,0,0,.23,0,.07,0,1,.03,.95,0,.1,0,.63,.02,.41,.63,.09,0,0,.13,0,.01,0,.15,.75,0,.01,.07,0,0,0,.01,0,.08,0,0,.25,.43,.75,.38,0,.72,0,0,.52,.79,0,0,.64,.02,0,.37,0,0,.54,0,0,0,.16,0,.01,0,.19,0,0,.01,0,0,.4,0,0,0,.06,.46,.12,.86,0,0,.08,.25,0,.23,.64,0,.11,0,0,0,0,.11,.01,0,.06,0,0,.08,.07,0,.09,0,0,.01,0,.52,.52,.02,.92,0,.61,0,0,.01,0,0,0,0,0,0,0,0,0,.03,.73,.38,.03,.12,.08,.23,.91,.67,.02,.66,0,.8,0,0,0,0,.53,.13,.21,.39,0,.37,0,0,0,.5,.52,0,.35,.89,.57,0,0,0,.13,0,.01,0,.35,.01,.03,0,.01,0,0,.21,0,0,0,0,0,0,.06,.5,0,0,0,.03,0,.01,0,0,0,0,0,.03,.09,0,.58,0,.24,.05,0,.7,.33,0,.33,0,0,.44,0,.32,.77,.09,.12,0,0,0,.01,0,0,.56,.85,0,0,0,0,.52,.14,0,.02,0,0,.42,0,.01,0,0,.1,.01,0,.1,.84,.11,.04,.01,.82,0,.01,0,0,0,.37,0,.04,.02,0,.07,0,.55,.01,.5,0,.61,.52,.04,.59,0,0,.88,0,.03,0,.03,0,0,.17,0,.36,0,.46,.32,.7,.42,.8,0,.02,.42,0,0,0,.05,.52,0,.02,.04,0,.18,.54,.03,.43,0,0,0,0,.94,.78,0,0,0,0,.02,.93,0,0,.37,0,.25,0,.93,.66,0,0,.04,.08,.01,.02,.96,0,.02,0,.03,0,.97,0,.03,.35,0,0,0,0,0,0,.69,0,0,.11,0,.12,0,0,0,0,0,.32,.7,0,.01,.05,0,0,0,0,0,.34,.06,.31,.53,0,0,.43,.03,.74,0,0,0,0,0,.01,0,0,.15,.01,0,0,.01,0,.06,.23,.34,.58,.9,.07,.88,.01,0,0,.93,0,0,0,.92,0,.05,0,.99,.85,0,0,0,0,.01,0,0,0,0,.08,0,0,0,.03,.01,.02,.29,0,.05,.14,.53,.05,0,0,0,.85,0,.41,.62,0,.01,.13,.32,.95,0,.23,0,0,.82,.25,0,0,.34,0,0,0,.37,0,.64,0,0,.01,.52,.01,0,0,0,.31,.68,.39,.53,0,.61,0,.09,.04,.44,0,.05,.25,.01,0,.89,0,.54,0,0,0,.48,.01,0,0,.13,.74,.32,.72,0,0,0,0,.07,.03,0,0,0,.04,0,.1,0,0,.07,.36,.84,.99,.35,.01,0,.5,.46,.02,0,.25,.07,0,.27,0,.61,0,0,0,0,0,0,.18,.02,.31,0,0,0,0,0,.02,0,.42,0,0,.93,.34,0,.04,0,.08,0,0,0,0,0,0,.09,.79,.06,.98,.49,.07,.01,0,0,.37,.82,.48,0,0,0,0,.64,.04,0,0,0,0,0,.04,.68,.3,.42,.4,0,.01,.24,0,0,0,0,.23,.99,.08,.09,.11,.12,.67,.81,0,.02,0,0,0,.01,.5,.37,.01,.67,.22,0,0,0,0,0,.03,.44,0,.02,.41,.33,0,0,.15,.41,0,.34,.41,0,0,0,0,0,0,.52,0,0,.08,.96,.74,.58,.25,0,0,0,.14,.01,0,.17,0,0,0,.25,.14,.01,.01,0,.76,0,0,.04,.81,0,0,0,.09,.08,0,.58,.18,.91,.01,0,0,.19,0,0,0,0,0,0,.02,.93,.45,0,.13,0,0,0,.74,0,0,0,0,.79,0,0,0,0,.21,0,0,.1,0,0,.53,0,0,0,0,.83,.76,.36,0,0,0,0,.06,0,.63,0,0,.08,0,0,.46,.01,.1,.01,.06,.12,.31,0,.02,.84,.37,.24,.04,0,.67,0,0,0,0,0,0,0,.49,0,0,.06,.3,0,0,.81,.33,.02,0,0,0,.05,0,0,.71,.25,.2,0,0,.26,0,0,.22,.8,.34,0,0,0,.33,0,.91,.37,0,0,.1,0,.04,.02,0,0,0,0,0,.76,.06,0,0,.82,0,.93,.03,0,0,.17,.66,.27,.05,0,.24,0,.04,0,.1,0,0,.06,0,0,.63,0,0,.79,0,.38,.72,.03,0,.01,.86,.04,0,0,0,.08,.07,0,0,0,0,.35,0,0,0,.08,0,0,.02,.15,0,.01,.37,.27,0,.8,0,.66,0,.24,0,.77,0,.03,0,.84,0,.62,0,.23,.48,0,.07,.19,.01,.77,.28,0,0,.3,0,0,0,0,0,0,0,0,0,0,0,.22,.04,0,0,0,0,0,.66,0,.04,.43,.85,.08,.38,.74,.46,.56,.64,0,0,.76,.17,.14,.75,0,0,0,.01,.72,0,.5,.21,.15,0,.07,.1,0,.42,0,0,.79,.09,.21,0,.76,.36,0,.42,0,0,0,.13,.49,0,.05,0,.98,.87,0,.32,.64,.4,.02,0,0,0,0,0,.17,0,.21,0,0,0,.01,.01,.01,0,0,0,0,.03,.77,0,0,0,.19,.55,0,.04,0,0,0,.19,0,.77,.33,0,.01,.52,.62,0,0,.66,.89,0,0,.63,0,0,0,0,0,.01,0,0,0,.02,0,0,.14,0,.58,.85,0,0,.97,0,0,.58,.01,0,0,.02,.78,0,.05,.25,.21,.56,.84,0,.15,0,0,0,.79,.63,.01,0,0,.54,.15,0,0,.77,0,0,.11,0,.08,.04,.44,.94,.05,0,0,.39,0,.07,0,.37,.07,0,0,.01,0,0,.15,0,0,0,0,0,0,0,0,0,.49,.12,.26,0,.31,0,.78,.71,0,.02,.25,.01,.06,.28,.22,.43,0,.28,.14,0,.15,.57,0,0,0,0,0,.06,0,0,0,.07,.1,.51,0,0,0,.48,.02,.02,0,.18,0,.05,.01,.11,0,0,.13,.23,0,.04,0,.01,.04,0,.11,0,.59,.04,0,0,.81,.08,.12,.07,0,0,.61,.15,.55,0,.36,0,.33,0,.8,.22,0,.16,.3,0,.05,0,0,0,.03,.11,0,.02,0,0,0,0,.01,0,.92,0,.09,0,0,.01,0,0,.48,0,.83,0,0,.04,.01,.02,.37,.16,.17,.23,0,0,0,.04,0,.47,0,0,0,0,0,.16,.17,.85,.82,0,0,0,.07,0,.05,.11,0,0,.19,0,0,.02,.12,0,0,.9,.6,0,0,.86,0,.03,0,.69,0,.03,0,.88,.5,0,.1,.5,0,0,.19,.06,.5,0,.02,.48,0,.01,.18,0,0,0,0,0,0,0,0,.06,0,0,0,.02,0,.09,0,0,0,.87,.02,.22,0,0,.03,0,.35,.14,.22,.01,.12,.17,0,0,.16,0,0,0,.78,0,0,.1,0,0,0,.02,.12,0,.39,.01,.01,0,.56,0,.08,0,.71,.38,0,0,.85,0,0,.14,0,.15,.11,.01,0,.02,.14,.27,.66,.05,0,.91,.76,0,.33,.28,0,.3,0,0,0,0,0,.68,0,0,.04,0,.79,0,0,.23,0,.22,.02,.49,0,.01,.04,.4,0,0,0,0,0,.02,.23,.03,.02,.28,0,0,0,.08,.3,.59,0,0,.01,.15,0,0,.02,0,0,0,.68,0,0,.71,0,0,0,0,.05,.68,0,0,0,0,0,.9,0,.96,.04,.46,0,.52,0,0,0,.09,0,0,0,0,.04,0,.29,.01,0,.66,.51,0,.9,0,.15,0,0,0,.02,.1,.16,0,.15,.63,0,.09,0,0,0,0,.86,0,0,0,.02,0,0,0,0,0,0,.02,0,0,.06,0,0,0,0,.01,0,0,.26,0,0,.49,0,0,0,0,0,0,0,.82,.97,0,0,0,0,.15,0,0,0,0,.72,.01,.3,0,0,0,0,0,.64,0,0,0,.01,0,0,.01,0,.46,0,.43,0,.55,0,.07,0,0,.02,.27,.09,.19,0,0,.01,.94,.06,0,0,0,0,0,0,.47,0,.46,0,.97,0,.77,.85,.83,0,.18,.33,0,.54,0,.81,0,0,0,0,0,0,.01,.52,0,0,0,.64,.56,0,0,0,.91,0,.02,.37,0,0,0,0,.99,.02,.1,0,0,0,.22,0,0,0,.07,0,.42,0,0,.84,0,.28,.11,0,.92,0,.03,0,.49,0,.22,.82,0,0,.33,0,.01,.19,.19,0,0,.83,0,0,.59,.22,0,0,.01,.36,.92,.11,0,.48,0,.36,0,0,0,.02,.1,.21,.8,.01,0,0,0,.01,0,0,0,.02,.2,.74,.24,0,0,.03,0,0,0,0,0,0,.15,0,.19,.4,0,.12,.18,.01,0,0,.64,0,.05,0,0,.95,.47,0,.85,.04,0,0,.35,.11,.39,.24,.66,.07,0,0,.68,0,.08,.56,.02,0,0,0,.54,0,.02,0,.4,.74,0,.14,0,0,0,.96,0,.01,0,0,0,0,.77,0,0,0,0,0,.45,.04,0,.03,0,.21,0,.05,0,.15,.07,.04,0,.31,0,.97,0,0,0,.2,.01,0,.02,0,0,0,.24,0,.04,.55,.73,.58,.6,.11,.34,.15,.19,0,0,0,.92,.04,.28,0,.72,.02,.21,.32,0,.49,0,0,0,.02,0,.02,.51,.03,.1,0,.11,0,0,0,0,0,0,.74,0,.16,.01,0,0,0,.74,.01,.05,.29,.03,.23,.86,.2,0,0,0,.01,0,0,0,0,0,.49,.58,.55,0,.1,.04,0,0,.07,0,.56,0,0,0,0,0,0,0,.2,.01,0,.59,.6,.05,.02,.11,.97,0,0,.88,0,.67,.01,.06,0,0,.17,0,.89,.88,.57,.02,0,.01,.22,0,.46,.05,0,.24,0,.57,.16,0,0,0,0,.03,0,0,0,0,.28,.22,.03,0,0,0,0,.84,.06,.31,.06,0,.1,0,0,.01,.01,.6,0,.06,0,.01,0,.01,0,.22,0,0,.46,.06,0,0,0,.95,0,0,.16,.65,0,0,0,0,.02,0,0,0,0,0,.49,0,.93,0,.01,0,0,.19,0,0,.01,0,.6,0,.01,.02,0,0,0,0,0,0,0,0,0,.29,0,0,0,.24,.07,.1,.59,0,0,0,0,.01,.78,0,0,.01,0,0,0,0,.67,0,.83,0,.39,.36,0,.45,.17,0,.37,.03,0];export{a as pvalData};
