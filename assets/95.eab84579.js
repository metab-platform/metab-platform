const a=[.02,.13,.28,.54,.37,.05,.24,.88,.56,.25,.01,0,.24,.51,.01,.3,.24,.13,.68,.09,.23,.05,.1,.05,.05,.73,.01,.63,.07,.03,.6,0,.14,.49,.01,.32,.1,.03,.81,.6,.72,.78,.47,.36,.37,.04,.12,0,.3,.29,.16,.09,.91,.99,.32,.03,.04,.36,.02,.58,.85,.13,.45,.13,.1,.08,.38,.01,.43,.89,.08,.13,.84,.94,.49,.02,.48,.74,.35,.01,.97,.7,.87,.93,0,.18,.53,.34,.56,.99,.88,.16,.5,.24,0,.6,.8,.06,.03,.87,.23,.48,.16,.01,.35,.5,0,.02,.17,.91,.6,.96,.82,.27,0,.24,.2,.09,.28,.16,.01,.17,0,.76,.29,.55,.3,.1,.48,.26,.33,.2,.87,.52,.18,.79,.13,0,.05,.21,.79,.52,.36,.44,.1,.28,.17,.51,.45,.99,.42,.55,.87,.19,.39,.69,.04,0,.64,.02,.37,.9,.02,.65,.98,.81,.73,.02,.96,.93,.01,.16,.15,.75,.19,.19,.22,.2,.19,.32,.51,.03,.68,.53,.39,.18,.1,.31,.24,0,.38,.83,.06,.81,.8,.1,.81,0,.22,0,.37,.31,.23,.08,.58,.21,.06,.14,.39,.89,.12,.04,0,.07,.31,.08,.51,.15,.06,.77,.45,.25,.16,.45,.96,.31,.35,.04,0,.57,.96,.1,.15,.37,.08,.03,.08,.03,.87,.79,.6,.05,.49,.1,.69,.95,0,.02,.97,.69,.76,.53,.26,.07,.42,.94,0,.06,.95,.34,.33,.92,.18,.66,.9,.36,.34,.78,0,.15,0,.01,.17,.34,.54,.17,.1,.68,.44,.26,.27,.83,.32,.04,.7,.7,.81,.07,.13,0,.18,.01,.58,.69,.05,.51,.1,.06,.03,.05,.63,.15,0,.86,0,.53,.65,.54,.55,.04,.99,0,.11,.31,.01,.07,.06,.92,.49,.01,.71,0,.01,.84,.13,.52,.37,.48,.44,.33,.82,.98,.03,.01,.53,.35,.04,.73,.64,.03,.92,.43,.88,.31,.23,.32,.18,.4,.65,.5,.8,.09,.19,.95,.69,.21,.79,.26,.13,.31,.19,0,.39,.02,.14,.63,.81,.31,.79,.02,.15,.29,.8,.86,.46,.05,.83,.77,.39,.56,.4,.29,.3,.11,.61,.64,.81,.13,.14,.15,.16,.01,.5,.19,.51,.26,.04,.19,.55,.21,0,.8,.28,.78,.71,.6,.25,.29,.62,.82,.52,.15,.89,.1,0,.44,.8,.2,.34,.04,.7,.42,.02,.05,.5,.43,.4,.13,.12,.62,.18,.62,.13,.06,.09,.61,.72,.7,.47,.07,.95,.76,.56,.05,.43,.47,.25,.97,.35,.24,.38,.14,.38,.94,.27,.21,.32,.22,.68,.76,.75,.3,.94,.76,.1,0,.07,.06,.12,.6,.01,.17,.02,.1,.29,.14,.52,.4,.08,.08,.56,.05,.3,.7,.41,.22,.88,.07,.13,.35,0,0,.4,.13,.31,.5,.2,.61,0,.79,.56,.42,.08,.86,.73,.17,.85,.06,.32,.96,.57,.69,.62,.16,.39,.39,.09,.3,.93,.9,.23,.13,.03,.57,.62,.01,.74,.37,.14,.56,.23,.14,0,.02,.01,.2,.26,.3,.17,0,.57,.8,.03,.18,.02,.23,.65,.23,.2,0,.54,.3,.54,.35,.81,.17,.17,.08,.51,.13,.95,.04,.1,.29,.73,.13,.86,.55,.27,.63,.48,.37,.17,.47,.42,.25,.26,.04,0,.47,.01,0,.41,.24,.98,.06,.25,.62,.18,.15,.72,.62,.65,.36,.15,.81,.7,.73,.29,.9,.01,.45,.2,.02,.5,.14,.59,.04,.24,.03,.36,.09,.11,.52,0,.88,.25,.64,.78,.02,.8,.35,.92,.1,.65,0,.33,.5,.75,.46,.95,.96,.78,.49,.07,.55,.09,.2,.1,.09,.21,.24,.07,.85,0,.31,.1,.59,.96,.68,.05,.98,.09,.27,.19,0,.01,.9,.13,.87,.22,.46,.3,.54,.53,0,.18,.87,.73,.47,.38,.02,.13,.16,.06,.47,.82,.43,.28,.61,0,.34,.79,.99,.97,.81,.73,.98,.3,.5,.4,.45,.59,.08,.36,.65,.01,.01,.25,.76,.93,.68,.83,.85,.02,.51,.68,.38,.01,.08,.36,.45,.8,.28,.27,.75,.5,.03,.58,.46,.66,.28,.09,.28,.82,.38,.13,.07,.05,.94,.09,.03,.14,.57,.32,.12,.12,.67,.93,0,.05,.14,.21,.27,.82,.09,.53,.13,.03,.51,.01,.25,0,.91,.39,.07,.61,.21,.04,.28,.23,.22,.2,.19,.42,.32,.62,.01,.05,.38,.16,.34,.37,.1,.31,0,.91,.97,.25,.78,.76,0,0,.9,.28,.96,.28,.86,.04,.06,.14,.78,.76,.03,.86,.07,.36,.37,.11,.46,.24,.09,.01,.71,.08,.77,.1,.67,.83,.96,.79,.39,.2,.08,.4,.05,.02,.45,.39,.33,.22,.05,.21,.32,.06,.39,.01,.21,.82,.58,.67,.25,.3,0,.39,0,.95,.48,0,.35,.29,.3,0,.09,.15,.57,.04,.03,.17,.16,.33,.16,.8,.68,.55,.54,.66,.85,.99,.01,.63,.51,.7,.76,.78,.46,.05,.01,.3,.36,.97,0,.5,.44,.23,.58,.02,.39,.07,.03,.02,.12,.9,.93,.23,.71,.42,.28,.47,.6,.78,.01,.17,.52,.31,0,.8,.03,.37,.29,.14,.06,.31,.76,.07,.29,.06,.25,0,.08,.33,.31,.14,.52,.65,.97,.09,.87,.06,.4,.62,.49,.85,.03,.5,.32,.01,.56,.39,.63,.71,.26,.24,.5,.66,.04,.36,.54,.06,.64,.01,.56,.88,.5,.26,.74,.71,.01,.05,.44,.78,.75,.88,.43,.09,.54,.86,.27,.58,.13,.17,.97,.89,.99,.74,.68,.74,.24,.77,.06,.02,.42,.01,.82,.56,.62,.14,.66,.09,.1,.91,.11,.39,.19,.67,.18,.62,0,0,.47,.07,.47,.23,.55,.82,.08,.1,.29,.13,.78,.09,.61,.66,.75,.29,.01,.02,.25,.15,.01,.02,.35,.72,.78,.89,.98,.16,.58,.55,.75,.86,.5,.82,.2,.04,.03,.62,.45,.06,.59,.02,.65,.25,.88,.73,.29,.09,.88,.26,.33,.53,.29,.4,.56,.01,.28,0,.91,.43,.36,.63,.47,0,.83,.55,.11,.69,.78,.26,.42,.78,0,.16,.4,.43,.63,.01,.86,.05,.68,.6,.49,.37,.35,.04,.85,.16,.83,.38,.68,.01,.09,.03,.01,.68,.96,.07,.79,.16,.71,0,.39,.75,.03,.41,.34,.22,.96,.46,.66,.37,.18,.08,.34,.63,.29,.4,.64,.3,.02,.06,.34,.45,.24,.27,.53,.1,.14,.09,.84,.05,.07,.01,.89,.26,.66,.21,.22,.79,.21,.01,.12,.63,.36,0,.27,.52,.02,.1,.79,.98,0,.73,.05,.66,.2,.25,.15,.23,.33,.46,.08,.96,.75,.45,.17,.29,.42,.01,.01,.09,.15,.29,.4,.22,.94,.6,.84,.76,.77,.19,0,.92,.45,.89,0,.21,.95,.53,.82,.54,.51,.15,.05,.09,0,.56,.12,.84,.49,.04,.42,.95,.75,.59,0,.55,1,.52,.52,.03,.07,.01,.5,1,.99,.66,.21,.64,.36,.25,.14,.03,.39,.01,.19,.09,.73,.65,.27,.62,.8,.06,.24,.05,.41,.28,.66,.8,.81,.32,.4,.6,.24,.32,.39,.86,.7,.01,.11,.07,.84,.54,.82,.18,0,.03,.13,.82,.01,.86,.75,.93,.28,0,.19,.25,.87,.84,.98,.66,.38,.18,.84,.21,.35,.13,.14,.92,0,.85,.5,.75,.18,.53,.55,.27,.02,.93,.04,.36,.04,.15,.52,.23,.06,.21,.49,.41,.01,.81,.38,.88,.83,.8,.12,.48,.49,.7,.56,.43,.13,.24,.82,.03,.04,.86,.24,.38,.06,.13,.18,.66,.86,.64,.57,.56,.04,.12,.21,.01,.78,.3,.12,.51,.07,.45,.95,.88,.24,.86,.24,.21,.62,.02,.11,.4,.46,.59,.58,.33,0,.56,.14,.1,.8,.76,.95,.42,.76,.39,.36,.39,.6,.01,.83,.04,.2,.72,.33,.23,.29,.01,.28,.04,.58,.69,.22,.37,.79,.99,.04,.94,.06,.01,.1,.44,.35,.77,.65,.97,.38,.65,.72,.53,.04,.04,.88,.7,.47,.42,.42,.75,.43,.13,.01,.51,.13,.38,.01,.02,.16,.79,.38,.33,.02,.3,.12,.98,.02,.51,.53,.03,.08,.56,.06,.76,.51,.19,.11,.11,.14,.43,.47,.19,.29,.96,.27,.45,.17,.64,.82,.74,.36,.5,.4,.09,0,.74,.92,.48,.32,.5,.75,0,.41,.72,.49,.76,.38,.16,.7,0,.17,.84,.19,.67,0,.24,.59,.6,.01,0,.35,.57,.59,.4,.32,.1,.02,.45,.02,.97,.08,.47,.18,.79,.46,.63,0,.55,.65,.04,.66,.52,.07,.89,.35,.1,.81,.6,.04,.41,.07,.54,.86,.17,.33,.73,.06,.5,.98,.61,.08,.85,.77,.42,.19,.96,0,.18,.22,.48,.54,0,.19,.59,.24,.97,.25,.67,.53,.1,.07,.67,.46,.56,.33,.87,.06,.22,.26,.05,.98,.74,.94,.98,.16,.21,.19,.44,.3,.56,.87,.29,.61,.06,.29,.68,.84,.52,.34,.77,.96,.25,.62,.95,.99,.91,.17,.07,.89,.76,.98,.61,.46,.34,.73,.01,.65,.73,.4,.28,.66,.1,.66,.24,.09,.78,.01,.13,.07,.17,.58,.73,.66,.67,.58,.27,.24,.89,.06,.7,.14,.84,.05,.11,.04,.43,.01,.41,.18,.88,.9,.56,.38,.16,.72,.1,.89,.63,.1,.01,.36,.84,.49,.34,.17,.38,.99,.13,.92,.52,.32,.77,.09,.1,.71,.91,.1,.33,.58,.02,.1,.22,.04,.04,.49,.29,.35,.44,.78,.23,.08,.29,.76,0,.09,.19,.71,.67,.75,.94,.62,.4,.18,.43,.89,.13,.2,.04,.38,.32,.4,.21,.04,.18,.31,.72,.81,.03,.39,.15,.4,.54,.32,.53,.21,.18,.81,.19,.76,.38,.66,.08,.58,.49,.24,.59,.3,.43,.05,.27,.79,.28,.06,.13,.01,.52,.58,0,.01,.49,.82,.36,.35,.16,.09,.87,.99,.02,.15,.95,.73,.04,.28,.34,.04,.6,.07,.77,.52,.33,.25,.75,.3,.11,.01,.97,.79,.48,.3,.56,.22,.62,.05,.51,.91,.15,.9,.04,.88,0,.15,.58,.17,.06,.12,.01,.09,.84,.48,0,.9,.23,.47,.27,.66,.73,0,.37,.09,.12,.06,.25,.45,.82,0,.47,.64,0,.38,.27,.6,.36,.75,.54,.9,.8,.92,.2,.62,.79,.31,.03,.19,.25,.58,.71,.97,.34,.22,.03,.69,.58,.05,.24,.13,.58,.48,.6,.18,.01,.42,.4,.08,.97,.78,.37,.13,.88,.38,.17,.5,.55,.14,.74,.04,.2,.04,.93,.01,.52,.29,.03,.81,.71,.35,.89,.52,.31,.11,.02,.82,0,.26,.03,0,.64,.16,.13,.9,.01,.31,.11,.33,.05,.15,.31,0,.71,.64,.37,.04,.21,.1,.57,.17,.81,0,.31,.18,0,.18,.53,.56,.08,.58,.55,.13,.89,.35,.21,.81,.56,.32,.44,.09,.65,.51,.19,0,.23,.53,.69,.85,.47,.11,.03,.45,.92,.35,.68,.07,.56,.55,.74,.17,0,0,.82,.71,.3,.79,.56,.8,.05,.13,.91,.4,.38,.02,.74,.59,.02,.11,.18,.26,.11,.09,.57,.3,.01,.9,.16,.01,.12,.82,.09,.06,.83,.06,.11,.41,.81,.1,.09,.02,.71,.5,.1,.46,.39,.02,.48,.28,.71,.72,.81,.11,.96,.86,.88,.2,.01,.14,.56,.69,.59,.63,.58,.03,.01,0,.38,.03,.14,0,.34,.82,.23,.03,0,.11,.41,.54,.17,.86,.46,.78,.09,.02,.04,.97,.9,.35,.21,.55,.07,.33,.79,.52,.02,.27,.99,.5,.32,.17,.42,.77,.79,.5,.53,.01,.54,.19,.61,.15,.27,.24,.19,.38,.21,.16,.83,.13,.01,.25,.08,.54,.33,.1,.66,.46,.76,.86,.53,.68,.3,.81,.14,.5,.04,.34,.87,.72,.72,.44,.51,.58,.16,.12,.07,.25,.23,.29,.12,.99,.36,.06,.13,.04,.1,.42,.02,.21,.14,.49,.79,.03,.07,.75];export{a as pvalData};
