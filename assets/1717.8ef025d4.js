const a=[.01,0,0,.85,0,.86,.05,.01,.55,0,.01,.38,.29,0,0,.95,0,.82,0,.25,.99,.1,.49,0,0,0,.37,.49,.06,.4,0,.04,0,.01,.18,.35,0,0,.07,0,.38,0,0,.93,.81,.07,.78,.02,.05,.5,.14,.45,0,0,0,.01,.33,.12,.01,0,0,0,0,.42,.38,.93,0,0,.29,.88,.85,0,.07,.47,0,.24,.1,.01,0,.91,0,0,.31,0,.42,.03,0,.98,0,0,.05,.88,.64,0,.34,.01,0,.82,.02,0,.56,0,0,.08,0,.27,.09,.19,0,0,.73,.4,.93,0,.13,0,.01,.07,0,.01,.09,.1,0,.01,.63,0,0,.04,.91,0,.01,0,.22,.66,0,.1,.29,.28,.48,.27,0,.05,0,0,.31,.28,.75,.26,0,.12,0,.39,.61,.79,0,.34,.07,.32,.36,0,.59,0,.42,.56,.89,.05,0,.19,.46,0,.47,.49,.22,0,0,.33,.52,.49,.16,0,.68,.81,.24,0,0,.12,.03,.02,.21,.19,.29,.83,.97,0,0,0,0,0,.37,.01,.02,0,0,.65,0,0,.5,.07,.17,.08,.01,0,.98,0,.12,.33,.85,.07,.27,0,0,0,0,0,0,0,.1,.25,0,.32,.36,.15,.01,0,.13,.15,0,.69,.86,.37,.29,0,0,0,.28,0,.04,.25,.03,.93,.72,0,0,.14,0,.1,.14,0,.46,0,.37,.69,0,0,.31,0,.23,0,.99,0,.96,.01,0,0,0,.34,.54,.15,0,.03,.79,0,0,0,.61,0,.23,0,.02,.08,.02,.47,0,0,.49,0,.67,.34,.27,0,.83,0,.1,.28,.18,.36,.15,0,.75,.49,0,.38,.07,.39,0,0,.01,.41,0,0,0,.41,0,0,.81,.68,0,.33,.34,.46,0,0,.56,.99,.05,.99,.88,.02,0,.01,.02,0,.18,.14,0,0,.12,.18,0,.08,0,0,.15,.71,0,0,.03,.49,0,0,.15,.23,.83,.04,.28,0,.12,0,0,.95,.35,.05,.81,.03,0,.4,.58,0,.82,.09,.78,.91,.5,.34,.82,.06,.57,.64,0,0,0,.15,.32,.57,.21,0,0,.24,.79,.6,.55,.35,0,.17,.53,.2,0,0,0,0,0,0,0,0,.3,.65,0,0,.67,0,.29,0,.2,.26,.47,0,0,.91,.51,0,0,.02,.02,.07,.32,0,.03,0,0,0,0,0,0,.26,.01,0,0,0,.04,0,.3,0,0,.08,.1,.67,.01,0,.98,.01,0,0,0,.04,.67,.66,0,.23,0,0,.46,0,0,.05,.48,0,0,.96,0,.01,0,0,0,.66,.01,.17,0,0,.02,0,.35,.42,0,.01,0,0,.44,.13,0,0,.79,.83,0,0,0,.02,.82,0,0,0,0,.07,0,.1,.02,.04,.02,.14,.19,0,.91,0,.56,.36,0,.28,.59,0,.61,0,.99,.56,.2,.01,.72,.19,.04,.04,.01,.33,.09,.08,.06,.97,.03,.01,.91,.77,0,.42,.18,0,0,0,0,.13,0,0,.02,.11,0,.34,.21,0,.18,.07,.2,.9,.05,.48,0,0,.1,0,0,0,.08,0,.16,.38,.05,.02,0,.49,0,0,0,0,.06,0,.12,.46,.7,0,0,0,0,0,0,.84,0,0,0,.12,0,.29,.52,0,.05,.38,.33,0,.41,.64,.04,.78,0,0,.66,.44,.39,0,.18,.3,.19,.85,.99,.3,0,0,.38,0,0,.13,0,0,0,.01,.03,.03,.29,0,0,.41,0,0,0,0,.82,0,.47,0,.05,0,0,.24,0,.64,.01,.12,0,0,0,.06,.04,.1,.9,.39,0,0,.19,.55,.19,.24,0,0,0,0,0,.54,.3,.03,0,0,.64,.03,0,0,0,0,.75,0,.21,0,.12,0,0,.07,0,0,0,.06,.07,0,.85,.48,.36,0,.76,.5,0,0,.02,.74,.45,.49,0,.46,.04,.08,.06,0,0,.48,0,0,0,.02,.32,0,0,.18,0,.16,.09,.23,0,.26,.25,.17,.03,0,0,.69,.29,0,.49,0,.09,0,.95,.04,.68,.83,0,.34,.07,0,0,.41,0,.1,0,0,0,0,0,.02,.03,.96,.04,.84,0,.12,.3,.05,.03,0,0,.03,0,.14,.75,0,0,0,.06,.09,.36,.07,0,.05,0,0,0,.37,0,0,0,0,0,.01,0,0,0,.01,.4,.01,.05,.45,.78,.1,0,.01,0,0,0,.01,.9,0,.2,.59,0,0,.36,0,.16,.01,.05,.44,.38,0,.43,.29,.55,.2,.49,.7,0,.01,0,0,.01,0,.16,0,.58,.04,.05,.98,.03,.37,.06,.23,.86,1,.05,.38,.81,.11,0,0,.02,0,.06,.5,0,.22,0,0,0,.84,.29,.31,.31,.09,.34,.76,.06,.15,.48,0,.24,0,0,.47,.28,.65,0,0,0,0,0,0,0,1,0,.04,0,0,.19,.08,.89,.24,.43,0,.16,.58,.16,.11,.27,.64,.29,.03,0,.82,.41,.03,0,.78,.2,.15,0,0,0,0,.1,0,0,.11,.76,0,0,0,0,0,.09,.34,0,0,.15,.75,.91,0,.01,.61,0,0,.17,.79,0,.47,.05,.06,.08,.5,0,.62,0,.76,0,.2,0,.61,0,.76,.63,.51,0,.07,.22,.01,0,0,0,.18,.75,.12,.68,0,0,0,0,.05,.91,0,0,.17,.13,0,.07,0,.94,0,.38,.64,.93,.91,.39,.13,.64,.19,.03,.57,.17,.12,.9,.06,.29,.35,.05,0,.87,.18,.22,.07,.15,0,.01,.3,0,.82,0,0,.17,.85,0,.84,.03,.26,.01,.28,.02,.54,.93,0,0,.01,.01,.37,0,0,.02,.05,.77,.43,.46,0,.27,0,.57,0,0,.83,.92,.33,.08,.39,.73,0,.05,.7,.63,0,.02,.28,.39,.13,0,.39,.51,.08,0,0,.26,.09,0,0,0,0,.21,.01,.36,.41,.03,.76,.58,0,.06,0,.92,0,0,.04,0,0,0,.16,0,0,0,0,0,.66,0,.33,0,.94,0,.61,.02,.03,.02,.33,.01,.02,.01,0,.24,0,.06,0,.68,0,0,.83,.98,0,.2,.45,.02,0,0,0,.9,0,0,.11,.19,.01,0,.57,.61,.02,0,.4,0,0,0,0,.22,.04,.02,0,.98,.7,.41,.08,.11,.34,0,0,.73,.61,0,.3,0,0,0,.07,.58,0,0,.55,0,.15,0,.62,.03,.41,0,.05,.9,.64,0,.05,0,0,.45,0,.64,0,0,.24,0,.77,.1,0,0,0,.04,0,.17,0,.4,0,0,0,0,.11,0,.02,.05,0,0,.53,.06,0,0,.94,.1,0,0,.45,.24,.03,.79,.01,.07,.18,.76,.17,0,.2,0,0,0,.39,.85,.33,0,0,0,.15,.35,.85,.24,.03,0,.72,0,.47,.57,.1,.18,.09,0,0,0,0,0,0,.05,0,.83,0,.16,.13,.19,.29,0,.63,0,.11,0,0,0,.09,0,.36,0,.61,0,.51,.42,.92,0,.32,.66,.38,.2,0,0,0,.26,.7,.06,0,0,0,0,.01,.1,.8,.81,0,.03,.06,0,.47,0,0,0,0,.01,.67,.03,0,0,.06,.33,.01,0,0,.99,.1,0,0,0,0,.63,0,.04,.81,.29,.57,0,.81,.62,0,.81,0,.01,.13,.01,.51,.56,0,.9,.04,.02,.23,0,0,.42,.19,.74,.26,.78,.38,0,0,.08,.01,0,.06,0,.41,.5,.89,0,.77,.6,0,.74,.03,0,0,.04,0,.26,0,.01,.42,.56,0,.35,.21,0,0,.32,0,.75,0,0,.04,0,.33,0,0,.16,.25,.02,0,0,0,.54,.15,0,.12,0,0,.04,.37,.46,0,.73,.53,.06,.42,.09,.72,.14,.66,.02,.72,0,.05,.12,0,.38,.56,0,.01,0,0,.65,.41,.06,.69,0,0,0,0,.24,.01,.89,.33,.86,0,0,0,.09,.01,0,0,0,.74,.54,.47,.75,.5,.03,.71,0,0,.04,.05,0,0,.31,.01,0,.68,0,.42,0,0,0,.12,.76,0,.23,.02,.04,0,.01,.78,.33,0,0,0,.01,.6,.35,.01,.63,.13,.24,0,.12,.66,0,.18,0,0,0,.28,.8,.03,0,.14,.16,.04,.12,.95,0,.06,0,.01,.29,.03,.12,0,.84,.34,0,.87,.12,.22,.19,0,.34,.64,0,.5,.14,0,0,0,0,.68,0,0,0,.93,.12,.35,.01,0,0,0,0,0,.04,.07,0,0,0,0,.05,.66,0,.02,0,.69,0,0,0,.9,0,0,.06,0,.21,0,.87,.17,0,0,0,.44,0,0,0,.38,.09,0,0,0,0,.01,.02,.81,.43,0,0,.73,.13,0,.01,.02,0,.1,0,0,.21,.1,0,.8,.07,0,.06,.01,.01,.01,.01,0,0,0,.11,0,.02,0,.17,.19,.82,.37,.62,.66,0,.48,0,.01,0,.38,.57,0,0,0,0,0,.3,.71,.04,.13,0,.9,0,0,0,0,.55,0,.28,.72,0,.97,0,.31,.03,0,0,0,0,.74,0,0,0,.04,0,0,.24,0,0,.14,0,.34,0,0,.56,0,.09,.46,.39,.02,.35,.01,.38,0,1,.1,.47,.48,.26,0,0,0,.61,0,0,0,0,0,0,.47,.11,.07,0,.57,0,.35,.03,0,.23,0,0,0,.02,0,0,.16,.47,.48,0,0,.33,0,.31,.76,.23,.95,.27,0,0,0,0,.11,.16,0,.41,.59,.04,.46,0,.77,0,0,0,0,.11,0,0,0,.45,.01,.23,.21,0,.24,.01,0,.68,0,.49,.51,.04,.35,0,0,.08,0,0,0,0,0,.17,0,.42,0,0,0,0,.6,0,0,0,0,.01,.07,0,0,0,0,.01,.21,.75,0,0,0,.42,.23,.5,.98,0,.71,0,.15,.01,0,0,0,0,0,0,.98,0,.73,.12,0,.41,.04,.7,0,0,0,.01,.19,0,.01,0,.02,.98,.49,.38,.28,.54,0,0,.68,.12,0,.02,0,.01,.34,.11,.39,.04,.01,0,.67,.64,0,.1,.13,0,0,0,.39,.21,0,.06,.33,0,0,0,.27,0,.02,0,.57,0,.92,0,.02,.93,0,.94,.08,.26,0,0,.15,0,0,0,0,.03,.99,0,.01,.02,.06,.18,.32,0,0,.48,0,0,.02,.01,0,0,0,.27,0,.1,0,0,.34,0,0,.81,.09,.96,0,.01,.41,0,.45,.92,0,.06,.19,.31,0,.07,0,.4,.9,.04,.14,0,.11,.65,.06,.05,.84,0,0,0,.28,0,0,0,0,0,.37,.14,.01,0,.97,.07,.28,.12,0,0,0,0,0,.66,0,0,.52,.47,.01,.68,0,.14,1,.97,0,0,0,0,.02,.32,.1,0,.03,.25,.01,0,0,0,.7,.03,0,.02,0,0,0,0,0,.09,.09,0,0,0,0,0,.01,0,0,0,0,.03,.18,0,0,0,0,0,0,.23,0,0,0,.22,0,0,0,0,0,0,0,0,.62,0,0,.23,0,0,.43,0,0,0,0,.93,.45,.62,.04,0,.21,0,0,0,.01,.11,.29,.6,.01,.09,.37,.83,1,0,.26,.57,0];export{a as pvalData};
