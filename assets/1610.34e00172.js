const a=[.77,.84,.85,.18,.17,0,.27,0,0,.1,.01,.01,.74,.03,.04,.81,.33,.51,.09,.2,.89,0,.17,.48,0,0,0,.97,.35,0,0,0,.01,.5,.46,.32,.49,.03,.42,.27,.66,.01,.07,.58,.57,.15,.39,.41,.11,0,0,.61,.01,0,0,0,0,.06,.79,.02,0,.19,0,.81,.44,0,0,.29,.64,.99,.73,.56,0,.01,.2,.55,.25,0,.55,.04,.34,.02,.26,0,.02,0,0,.1,.13,.04,.11,.75,0,.01,.89,.02,.04,.02,.22,0,.28,0,.01,.53,0,.44,.1,.72,0,.01,.16,0,.29,.17,.36,.34,.91,0,.54,0,.72,.17,.01,.25,.08,0,.56,.21,0,.15,0,.02,.23,0,.21,.62,0,.01,0,.81,0,.58,0,0,.24,.07,.24,.99,0,.31,0,0,.4,.2,0,.02,.3,.09,.32,.02,0,0,.31,0,0,0,.89,0,0,0,.39,0,0,.01,0,0,.12,0,0,.08,.43,.71,.68,.02,0,.01,.97,.45,0,.33,.63,0,.51,0,0,.15,0,.01,.45,0,0,0,.03,.5,.52,.01,.2,0,0,.93,0,.18,.09,.04,.12,0,.8,0,0,.02,0,0,.19,.03,0,.1,0,0,.02,.1,.56,.76,.09,.64,.62,.26,.9,.22,.69,.68,0,.42,0,0,0,0,.49,.02,.23,.49,0,.12,0,.02,.01,.9,.91,0,.51,.1,.48,.93,0,0,.41,0,.07,0,.08,0,0,.36,.05,.6,.01,.57,0,0,.01,.15,0,0,0,.1,0,0,0,.03,0,0,0,0,0,0,0,.07,0,.04,0,0,.19,.98,0,.78,.12,.01,.31,0,.04,.06,0,.65,.63,.23,.89,.01,0,.07,.87,.36,0,.03,.1,0,0,0,.01,.05,.02,0,.78,0,.77,.56,0,.11,0,0,0,.34,0,.56,.34,.89,.35,.96,.31,0,.1,0,0,.02,.42,0,.32,0,.14,.12,.12,.28,0,.13,0,.99,.72,.68,.61,.12,.02,.43,.04,.13,0,0,.01,0,.44,0,.32,0,.92,.97,.83,.44,.54,.09,.08,.22,.14,.18,.06,.86,.39,0,0,.84,0,.27,.07,.08,0,.01,.21,0,0,.6,.16,.15,0,.02,.72,.22,.15,.03,.38,.33,0,.49,0,.19,.04,.03,0,.61,0,.17,.53,.11,0,.27,0,0,0,.5,0,.31,0,0,.06,0,0,0,0,0,0,0,.82,0,0,0,0,0,0,.48,.71,.43,0,.27,0,0,.11,0,.27,0,.51,.04,.09,.16,0,.02,.76,.33,.6,.86,0,0,0,0,.5,0,0,.17,.5,0,.04,.08,0,.07,.77,.32,.87,.02,0,.61,.26,.01,.01,.96,0,0,0,.4,.04,0,0,.57,.79,0,.63,0,0,.04,0,.12,.03,0,.05,0,0,0,0,.43,.25,.69,.75,.97,.7,.24,.13,0,0,0,.34,.01,.53,.02,0,.01,.02,.14,.5,.07,.76,0,.22,.59,.37,0,.42,.84,0,.1,.22,.14,0,.63,0,.02,.13,.9,.78,0,0,0,.86,.83,.7,.42,.02,.64,.65,.97,0,.26,.06,.9,.94,.04,0,.81,.1,.89,0,.02,0,.28,.51,.1,0,.59,.49,.14,.69,.42,0,0,0,.77,0,0,.01,.06,.64,0,.54,0,.01,.62,.53,.51,.89,.46,.32,0,.93,.16,.66,0,.05,.55,0,.08,0,.97,0,0,0,.22,0,0,.83,.85,.63,0,.03,0,0,0,0,0,.07,0,0,.71,.18,0,.01,0,.91,0,.11,0,0,.13,0,.24,.54,.32,.8,.08,.92,.1,.11,.23,.89,.68,.58,.02,0,0,0,.54,.13,0,.01,.36,0,.06,.14,.52,.07,.12,.12,0,0,.09,.16,0,0,0,.91,.4,.25,.93,.99,0,.95,.1,.15,.26,0,0,0,.33,.9,.44,.15,.59,.64,0,0,.01,.16,0,.37,.81,0,.96,.64,.8,0,.01,.51,.39,.08,.82,.44,0,.06,.21,.02,.01,.19,.17,0,0,.31,.71,.57,.64,.05,.11,.03,0,.56,.96,0,.64,0,0,.17,.68,.01,0,.14,0,.75,0,.02,.19,.22,0,0,0,.03,.09,0,.85,.5,.01,.26,.03,.09,.14,0,.37,0,0,.28,.02,.83,.18,.17,0,.73,0,0,0,.96,0,0,.06,0,.63,0,0,.47,0,.37,.01,0,.43,.03,0,.36,0,0,.01,.35,.72,.81,.01,.24,.03,0,0,.12,0,.06,.12,.02,0,0,.08,.63,.2,.48,.01,.03,.59,.76,.05,.02,.03,.29,.01,.93,0,.55,0,.05,.02,.33,0,.01,.06,.91,0,0,.35,.07,0,0,.21,.24,.17,.25,.2,0,.89,0,.06,.5,.18,.11,.06,0,.19,0,0,.05,.76,.62,0,0,.25,.86,0,.53,.15,0,0,.23,.02,.43,.03,0,0,.03,0,.02,.68,.66,0,.31,.39,.02,.41,.63,0,0,.07,.48,.68,.73,0,.12,0,.73,0,.69,0,0,.49,.19,0,.99,0,0,.47,0,.62,.97,.12,.02,.26,.22,.77,.04,.2,0,.41,.62,.01,.02,.08,0,.29,0,.01,.04,.57,.03,0,.32,.94,0,.15,.75,.51,0,.06,.04,.68,0,.19,0,.65,0,0,0,.12,0,.09,.01,.39,.82,0,.7,.47,0,.17,.67,.05,0,.01,0,0,0,0,.01,0,0,0,0,0,.29,.77,.8,0,0,0,0,0,.8,0,.94,.03,.17,.58,.68,.69,.43,.1,.87,.13,.09,.31,.09,.13,.97,0,0,0,0,.55,0,.24,.16,.89,0,.75,.17,0,.59,0,0,.03,.99,.1,0,.93,.28,0,.22,0,.01,0,.55,.58,.03,.65,.01,.13,.92,0,.7,.77,.1,.26,0,0,.61,0,0,.15,.01,.04,.01,0,0,.52,0,0,0,0,0,0,.73,.22,0,0,0,.33,.85,0,.67,0,0,.04,.57,.04,.73,.98,0,0,.31,.95,0,0,.67,.07,.02,.02,.19,0,0,.01,0,0,0,.11,.04,0,.71,0,.16,.07,0,.89,.18,0,0,.91,0,.01,.83,0,0,.01,.11,.81,.03,.63,.47,.85,.36,.75,.46,.24,.01,.02,.23,.63,.14,.35,0,0,.03,0,0,.06,.04,0,0,.23,0,0,.31,.22,.88,.53,0,.01,.57,0,.33,0,.51,.44,0,0,.42,0,0,.55,.01,.02,.01,0,.03,.16,.01,0,0,.6,.48,.79,0,.44,0,.62,.81,.24,.05,.84,.43,.33,.11,.21,.94,0,0,.55,.01,.94,.89,0,.01,0,.14,0,.81,.02,0,0,.05,.91,.24,0,.41,0,.04,.23,.11,.01,0,0,.43,.23,.14,0,0,.19,.22,.17,.34,0,.08,.92,0,.32,0,.97,.41,0,0,.96,.84,.3,.34,.01,.42,.89,.24,.75,.13,.43,0,.58,0,.32,.82,.43,.96,0,0,0,0,0,.05,.33,0,0,0,0,0,0,0,.52,.03,.7,0,.64,.03,0,.24,.25,0,.76,0,.04,0,0,0,.86,.61,.3,.68,.73,.98,0,.01,0,.53,0,.33,.02,0,0,0,0,0,.02,.28,.88,0,0,.08,.05,0,.72,.52,.02,.33,.98,0,0,.35,.68,0,.01,.47,.76,.02,.02,.09,.05,.7,0,.32,.11,.18,.04,.45,.96,0,.84,.66,0,0,.88,.03,.25,0,.05,.08,0,.52,.18,0,0,0,0,.01,0,.02,0,.56,0,0,0,.69,0,.19,0,0,0,.53,.63,.75,0,0,0,0,.02,0,.48,.1,0,.79,0,0,.21,0,0,.31,.98,0,0,.02,0,0,0,.18,.74,0,.02,.34,.25,0,.34,0,.72,0,.16,0,0,0,.89,.09,.69,.06,0,.65,.12,.21,.02,.01,.97,0,.34,.4,0,.05,.82,.33,.49,.29,0,.44,0,0,.01,0,0,.9,.19,0,.46,.01,.97,0,0,.93,0,.57,.32,.37,0,.6,.18,.66,0,0,0,.1,0,.14,.93,.06,.05,.12,0,0,0,.76,.36,.93,.01,0,.2,0,.01,0,.7,0,0,0,.59,0,0,.52,0,0,0,0,0,.98,0,0,0,0,.03,.55,.01,.6,.25,.12,0,.1,0,.01,0,.02,0,.05,0,.32,0,0,.04,.92,0,.4,.99,.02,.92,.01,0,.13,.01,0,.02,.21,.92,.03,.32,.96,0,.08,0,0,0,0,.89,.08,.03,0,.54,.07,0,.29,0,.15,0,.07,0,0,.02,0,0,0,.07,.91,.04,0,.04,.02,0,.89,.03,.31,0,0,0,.04,.01,.45,.45,.14,.42,0,0,.19,0,0,0,0,.26,.25,.99,.01,.12,0,0,0,.51,.97,0,.01,.42,.02,0,0,0,.73,0,.18,0,.51,.01,.12,0,.04,.81,.57,.84,.7,0,0,.77,.79,0,0,0,0,0,0,0,.25,0,.66,0,.01,0,.88,.95,.41,.01,.99,.04,0,.78,0,.74,0,.01,0,0,0,0,.04,0,0,0,0,.82,.9,0,.01,0,.91,.33,.09,.38,0,0,0,0,.95,.2,.92,.09,.47,.48,.61,0,0,0,.03,0,.17,0,0,.76,0,.52,.66,0,.75,0,.19,0,.23,0,.5,.35,0,0,.2,0,0,.04,.44,.1,.42,.27,.01,0,.43,.12,0,0,.19,.51,.07,.09,0,.75,.13,.56,0,.05,0,.55,.8,.06,.52,0,.06,0,0,.31,.03,0,0,.26,.16,.99,.14,0,.01,.94,.01,0,0,0,0,0,.21,.01,.37,.59,.01,.13,.55,.29,.43,.58,.92,0,.1,0,0,.46,.8,0,.45,.11,0,.34,.08,.54,.61,.14,.98,.4,0,0,.76,0,.96,0,.81,0,0,0,.57,.01,.65,.01,.52,.13,0,.09,0,0,.03,.22,0,.51,0,0,0,0,.4,0,.12,.05,.41,0,.88,.03,0,0,0,.28,0,.44,0,.49,.7,.4,.04,.54,0,.51,.02,0,.02,.68,0,0,.11,0,0,.03,.48,0,.92,.95,.56,.8,.88,.27,.17,.02,.85,0,0,0,.56,.06,0,.03,.73,.36,.99,.27,.04,.57,.01,0,.03,.08,0,0,.38,.96,.23,0,.89,0,0,0,.01,0,.04,.08,0,.37,.12,0,0,0,.24,0,.09,.15,.14,.16,.81,.13,0,0,.01,.15,.03,.01,0,0,.08,.23,.81,.13,0,.92,.64,0,.04,.01,.08,.18,.01,.01,0,0,0,0,0,.01,.36,0,.03,.73,.4,.67,.17,.33,0,0,.45,0,.3,.53,.09,0,0,.56,.15,.39,.36,.75,.14,0,.85,.54,.03,.02,.38,.06,.4,.08,.12,.42,.08,0,0,.05,.63,0,.01,.01,.18,.47,.11,.97,.01,0,0,0,.8,.19,.84,.16,0,.42,0,0,.69,.05,.79,.03,.52,.01,.25,0,.68,0,.98,.26,0,.33,0,0,.01,0,.92,.01,0,.39,.03,.15,.04,0,.01,.69,0,0,0,.02,.12,.57,0,.64,.03,.4,0,.06,.34,0,0,.18,.01,.96,.1,.2,.01,.01,.01,0,0,0,.19,.01,0,0,.75,0,0,.03,.22,.98,.01,.56,0,.04,.03,0,.01,.07,0,0,.06,.41,.02,0,0,.62,0,.18,0,.75,.32,0,.28,.65,.04,.1,.16,0];export{a as pvalData};
