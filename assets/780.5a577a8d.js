const a=[.59,.7,.07,.88,.01,.15,.05,.01,.27,.04,.01,.33,.75,.02,.01,.39,.45,.69,.73,.65,.95,0,.19,0,.13,.07,0,0,.03,0,.02,0,.32,.11,0,.71,.72,0,0,.16,.17,.01,0,.62,.92,0,.26,.17,0,0,.1,.79,.32,.27,0,.11,.18,0,0,.86,0,.01,0,.97,.15,0,0,0,.83,.68,.71,.64,0,.21,.03,.2,0,0,.92,.05,.05,.91,.22,.02,.51,0,.05,.56,.06,.32,0,.11,.01,.66,.78,.02,.01,0,.18,0,.6,0,0,.25,0,.32,0,0,.31,0,.33,0,.11,.32,.62,.92,.99,0,.03,.68,.57,0,.11,.42,.48,0,.01,.95,0,.83,0,.08,.85,0,.17,.92,0,.02,0,.54,0,.86,0,.03,.74,.95,.96,0,0,.13,0,.03,.76,.73,0,0,.33,.72,.15,0,0,0,.05,0,.01,0,.43,0,0,.9,.76,0,0,0,.18,0,.92,0,0,.58,.01,.85,.44,.79,0,.22,.17,.3,0,.36,.45,0,.37,0,0,.33,0,0,.61,0,.42,0,.82,.91,.1,0,.23,0,0,.74,0,0,.89,.43,0,.11,.23,0,0,0,0,0,0,.18,0,.81,0,0,0,.02,.72,.7,.75,.06,.82,.47,.03,0,0,.57,0,0,0,0,.01,.01,.43,.35,.54,.58,0,.01,0,.35,0,.03,.57,.47,.02,.65,.92,0,.02,0,0,0,.02,0,.2,.61,.06,.42,.72,.03,.84,.52,0,0,0,0,0,0,.03,.54,0,.37,0,.34,0,0,.46,0,.09,.05,.02,0,.02,.24,.14,0,.83,.23,0,.65,.12,.17,.57,0,0,0,0,1,.14,.86,.02,0,0,0,.01,.01,0,.16,.04,0,0,0,.03,.01,.25,0,0,0,.42,.51,0,.21,0,0,.13,0,0,0,.18,.97,.85,.01,.15,0,0,0,0,0,.39,0,.27,.06,.01,.14,0,.46,.25,.98,0,0,.88,.02,.13,.57,0,.73,0,.76,.19,.01,0,0,.02,.01,.22,0,.29,.89,.26,.71,.85,.78,.29,.93,.1,.05,0,.87,.85,.34,.05,.13,0,.45,0,.62,.64,0,0,.98,0,.92,.19,0,0,0,.01,.01,.04,0,0,.49,0,.97,0,.01,.48,.75,0,.41,.09,.65,.83,.2,0,0,0,.04,.74,.65,0,.27,.52,.01,.04,0,0,.01,0,.02,0,0,.58,.01,.14,0,.01,0,.03,0,.2,.01,0,.44,0,.51,0,0,.08,0,.84,.68,.89,.9,.03,.32,0,.89,.26,.17,0,.5,.02,.21,.34,0,0,.29,.03,.03,0,0,0,.27,.34,.04,.72,.49,.37,.01,0,.94,0,.15,.41,0,0,.01,0,.91,0,.62,0,.17,.67,0,0,0,0,.22,0,0,0,0,0,.1,.38,.01,.07,.97,0,.85,.55,.08,.89,.01,0,0,.48,0,.24,.19,0,.4,0,.87,.67,0,.63,0,0,.87,.12,0,0,0,0,.85,.03,.64,.01,.66,0,0,0,.74,.14,0,.01,.12,.76,.86,.47,.35,0,.31,.01,.02,.18,.09,.06,.14,.3,0,0,.48,0,.15,0,0,0,.07,.32,0,0,.48,.81,.37,.69,0,.06,.47,.6,.1,0,.07,.39,.05,.01,0,.5,0,0,.49,.81,.02,.6,.11,.02,0,.51,.75,.1,.01,.04,.43,.01,.29,0,.71,0,.92,0,0,0,.15,1,0,.05,0,.37,0,.53,0,.07,0,0,.11,0,.02,.14,0,0,.01,.17,0,.5,.01,0,.05,.51,.34,.01,.04,.38,.97,.15,0,.32,0,.16,.08,.31,0,.02,.05,.67,.74,.26,0,0,0,0,.05,.17,.95,.71,0,.93,.56,0,.01,.08,.01,.07,.36,.98,.58,0,.35,.28,.43,.37,.23,0,.15,.01,.06,.01,.28,.06,.3,.58,.91,.93,0,.03,0,.01,.06,.51,.96,.71,.01,.08,.23,.04,0,.51,.81,.81,.64,.07,0,.28,0,.02,0,.06,.19,0,0,.47,.54,.01,.49,0,.22,0,0,.92,.1,.67,.1,0,0,.59,0,.83,.03,.95,.68,.14,.18,.04,.73,.1,0,.53,0,.47,.69,0,.61,0,.55,0,0,.02,.37,0,.57,0,.15,.05,0,.45,.22,.59,0,.07,0,0,0,.68,0,0,0,0,0,.12,0,.05,0,1,0,.43,.08,0,0,.63,.02,.01,.01,0,.7,.47,.4,.04,0,0,0,.06,0,.32,.41,.85,.35,.06,.74,.61,.78,.07,0,.04,.86,.02,.86,0,.44,.1,0,.42,.01,.27,0,0,.87,.22,0,0,0,0,0,0,.01,.85,0,.53,.59,.57,0,0,0,0,.02,0,.16,.05,.11,0,0,.02,.35,0,0,.55,.72,.15,0,0,0,.04,.02,.52,.41,0,.25,.24,0,.33,.24,0,.37,0,.01,0,.73,.09,0,0,.58,.21,.77,.01,.29,.44,.11,.87,.24,.92,.75,.55,0,.52,0,.52,0,0,.02,0,.1,.2,0,0,.19,0,.26,.66,.16,0,.01,.13,.35,.09,0,0,.07,.85,.02,0,.06,0,.68,0,.01,.33,.25,0,.06,.06,0,.2,.73,.33,.24,0,.61,0,.42,0,.8,.01,.01,0,.66,.48,.78,0,.91,0,.43,.39,.97,.01,.6,0,.01,0,0,.06,.16,.12,0,0,.03,.02,0,0,.01,.02,0,0,.76,.85,0,0,0,0,0,.74,0,.14,.98,.74,.28,.5,.76,.38,.27,.78,0,.59,.8,.32,.2,.04,0,0,0,.01,.08,0,.19,0,.31,0,.02,.2,0,.63,0,.02,.79,1,.23,0,.02,.31,0,.14,0,.83,.01,.76,.24,0,.36,0,.95,.57,0,.6,.78,.05,0,0,.03,.01,0,.76,.37,.37,.06,0,.56,0,.93,.19,.11,0,0,0,.1,.06,.73,0,0,0,.82,.28,.19,.87,0,0,.14,.96,0,.65,.95,0,0,.31,.64,0,.03,.55,.04,0,0,.18,0,.07,0,.01,.02,.5,0,0,.6,1,.53,.19,.97,.02,.6,.18,0,0,.76,0,0,.62,.06,0,.49,.02,.01,.03,.96,0,.95,.32,.01,0,.88,0,.01,.08,.17,.55,.01,.12,0,.35,.05,.21,0,.36,.14,0,.79,.8,.53,.01,.19,.62,.65,0,.03,.53,0,.89,0,.02,.65,.37,.28,.86,0,.49,.83,.02,.77,0,0,0,.79,.79,0,0,1,.21,.61,.99,.48,0,.88,.17,0,.24,.54,.23,.33,.23,.42,.02,.57,.81,.16,.05,.78,.43,0,0,.1,0,0,.54,0,0,0,0,.05,.06,0,.03,.36,.08,0,.86,0,.01,0,.01,0,.1,.01,.44,.84,.81,0,.75,0,0,0,0,0,.01,.04,.03,.11,.66,.7,.58,.79,.4,.06,.36,.42,.79,.16,.45,.99,.01,.24,.03,.84,.71,0,.51,.1,0,.01,0,0,.01,.34,.21,0,0,0,0,0,0,.93,.58,.35,0,0,.01,0,.11,.87,.03,.86,0,.11,.65,0,.04,.69,.1,.44,.49,.3,0,.04,0,0,0,0,.47,0,.04,0,.59,.03,.27,.81,.42,0,0,0,.68,.02,0,.24,.3,.04,.02,0,0,.21,.86,.66,0,0,.57,.83,0,0,.79,0,0,0,.69,0,0,0,.02,.57,0,.23,.59,0,0,.4,0,.01,.57,.46,.04,0,.25,.46,0,0,0,.04,.12,0,0,0,0,0,.04,0,.6,.08,0,0,0,0,.03,0,.02,.41,.07,.64,0,.8,.45,.05,0,.65,.04,.21,.01,.26,.02,.06,.94,.9,0,0,0,.01,0,0,.85,0,0,.21,.16,.02,0,.96,.05,.04,.01,0,.36,0,0,.28,0,.01,.01,0,.16,.28,.02,.02,0,.55,.79,.62,0,.02,.16,.77,.53,.19,0,.34,.12,0,0,0,.1,.04,.17,.94,0,.27,0,0,0,0,.82,0,.95,.7,.79,.93,.17,.06,.55,.71,.03,.03,.21,.03,0,.94,.65,0,.78,0,0,0,.03,.48,.95,.04,0,.25,.2,0,0,.36,0,.01,0,.39,0,.36,.71,.01,0,.05,0,.44,.6,0,0,0,0,0,0,0,.9,.81,.46,.16,.56,.85,.02,0,.44,0,.36,0,0,.1,.25,.09,.02,0,.86,.2,.03,.46,0,.01,0,0,0,.03,0,.56,0,.66,.9,0,0,.01,0,.2,0,.38,0,.06,0,.09,.01,0,0,0,0,.42,0,0,.21,.63,0,.96,0,0,.66,0,0,.89,0,0,.55,.27,0,.23,0,0,.01,0,0,.09,.01,0,.99,0,.58,.1,0,0,0,.01,0,.17,0,.03,0,0,0,.75,0,.98,0,0,0,0,.25,0,.99,0,.48,.23,0,.01,0,0,.51,.07,.51,.09,.5,.02,0,.02,.64,.15,.06,.49,0,0,0,0,.94,0,.37,0,.01,0,.83,.75,.93,.03,.27,.63,0,.79,0,.91,0,0,.12,0,.07,.01,0,.25,0,0,0,.83,.1,0,0,.05,0,0,0,.28,0,0,0,0,.39,.49,.11,0,.01,0,.5,0,0,0,.06,0,0,0,0,.33,0,.21,.02,0,.65,.1,.05,.04,.02,0,.08,.04,0,.07,.18,0,.03,.09,.76,0,.07,0,0,0,0,.07,.43,.11,.2,.3,.29,0,0,.91,0,.52,0,0,0,.21,.03,.6,.46,.87,0,0,.26,0,0,.15,.01,.87,0,.42,.36,0,0,.08,0,0,0,0,0,.02,.75,.06,.9,.9,0,.37,.11,.33,.18,.04,.58,0,.79,0,0,.8,.84,.81,.39,.42,.03,0,.1,.04,.22,.67,.41,.58,0,0,.83,.96,.36,.56,.02,.13,0,0,.34,.02,.18,.01,.83,0,.01,.28,0,0,0,.53,.02,.38,0,0,0,0,.07,0,.14,0,0,0,0,0,.1,.72,0,.08,.05,.84,0,.07,.42,.84,0,.54,0,.46,.17,.01,0,.43,0,.05,.94,0,0,0,.08,0,.05,.09,.1,.08,.74,.78,.69,.11,0,.07,.09,.01,.93,.92,.37,0,0,.49,.15,.73,.75,.59,0,.11,0,.01,0,.36,.02,.22,.44,.04,.84,0,0,0,.53,.52,.09,.04,.05,.33,.8,0,0,0,.42,.57,.56,.02,.67,.28,.32,.1,0,0,0,.01,.72,0,0,0,0,.26,.46,.22,.09,.16,.3,.11,.01,.55,0,.16,0,.07,0,0,.01,0,0,.76,.01,.15,0,.46,.02,.16,.64,.1,0,0,.67,0,.04,.75,.63,0,0,.01,0,.1,.05,.45,.35,.8,.75,.9,0,.81,.89,.03,.08,0,.51,.3,.44,.01,.04,.02,.13,0,.01,0,0,.59,.53,.44,.08,.04,.01,.55,.14,.43,.94,0,.01,.16,.02,0,.93,.01,.78,.01,.12,0,.07,0,.13,0,.93,0,.84,.24,.02,.11,.48,0,.15,.01,0,.51,.34,0,0,.11,0,.09,.06,.05,.05,0,.07,.62,0,.09,0,.07,0,.25,.15,.04,.07,.79,.03,.23,0,.85,0,0,0,.68,.08,.09,.65,.03,.01,0,.04,0,.16,.95,.48,.39,.09,.43,0,.01,.06,0,0,.26,0,0,.01,0,.07,.04,.02,.01,0,.95,0,.02,.65,.89,.27,.36,.4,.12,.79,0];export{a as pvalData};
